import pytest
import requests


@pytest.fixture
def base_url():
    return "http://109.205.56.225:3001"

@pytest.fixture
def new_user_id(base_url):
    print("\n[1] Фикстура проснулась. Создаю юзера...")

    endpoint = f"{base_url}/api/users"
    payload = {
        "firstName": "Test",
        "lastName": "User",
        "age": 30,
        "city": "TestCity"
    }

    response = requests.post(endpoint, json=payload)

    assert response.status_code == 201,"Не удалось создать тестового юзера в фикстуре!"
    user_id = response.json()["id"]
    print(f"\n[Fixture] Создан юзер ID: {user_id}")

    print(f"[2] Юзер {user_id} создан. Отдаю его тесту и засыпаю.")
    yield user_id

    print(f"[4] Тест закончился. Удаляю юзера {user_id}")
    requests.delete(f"{base_url}/api/users/{user_id}")

@pytest.fixture
def users_to_delete(base_url):
    created_ids = []

    yield created_ids

    print("\n[Fixture] Начинаю уборку мусора...")
    for user_id in created_ids:
        print(f"[Fixture] Удаляю ID: {user_id}")
        requests.delete(f"{base_url}/api/users/{user_id}")