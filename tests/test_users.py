import requests
from faker import Faker


def test_get_users_list(base_url):
	endpoint = f"{base_url}/api/users"
	response = requests.get(endpoint)

	assert response.status_code == 200, f"Ожидали 200, получили {response.status_code}"
	assert isinstance(response.json(), list), "Сервер вернул не list"

def test_create_user(base_url, users_to_delete):
	fake = Faker("ru_RU")
	endpoint = f"{base_url}/api/users"
	payload = {
		"firstName": fake.first_name(),
		"lastName": fake.last_name(),
		"age": fake.random_int(18, 60),
		"city": fake.city(),
	}
	response = requests.post(endpoint, json=payload)
	assert response.status_code == 201, f"Ошибка создания {response.text}"

	data = response.json()
	created_id = data["id"]

	users_to_delete.append(created_id)

	assert data["firstName"] == payload["firstName"], "Имя сохраненного юзера не совпадает!"

def test_delete_user(base_url, new_user_id):
	print("[3] Я - Тест! Я работаю с юзером, которого мне дали.")
	endpoint = f"{base_url}/api/users/{new_user_id}"
	response = requests.delete(endpoint)

	assert response.status_code == 204 or response.status_code == 200

	get_response = requests.get(endpoint)
	assert get_response.status_code == 404, "Пользователь все еще существует после удаления!"

def test_update_user(base_url, new_user_id):
	endpoint = f"{base_url}/api/users/{new_user_id}"
	fake = Faker("ru_RU")
	payload = {
		"city": fake.city(),
	}
	response = requests.patch(endpoint, json=payload)
	assert response.status_code == 200, f"код ответа {response.status_code}"
	data = response.json()
	assert data["city"] == payload["city"], f"город отличае {data['city']}"
