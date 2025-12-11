import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export async function seedUsers(dataSource: DataSource) {
  const userRepository = dataSource.getRepository(User);
  const users = [
    { firstName: 'Ivan', lastName: 'Ivanov', age: 25, city: 'Moscow' },
    { firstName: 'Petr', lastName: 'Petrov', age: 30, city: 'Saint Petersburg' },
    { firstName: 'Sidor', lastName: 'Sidorov', age: 35, city: 'Novosibirsk' },
    { firstName: 'Elena', lastName: 'Smirnova', age: 28, city: 'Yekaterinburg' },
    { firstName: 'Anna', lastName: 'Kuznetsova', age: 22, city: 'Kazan' },
    { firstName: 'Dmitry', lastName: 'Popov', age: 40, city: 'Nizhny Novgorod' },
    { firstName: 'Maria', lastName: 'Vasilyeva', age: 27, city: 'Chelyabinsk' },
    { firstName: 'Sergey', lastName: 'Sokolov', age: 33, city: 'Samara' },
    { firstName: 'Olga', lastName: 'Mikhailova', age: 29, city: 'Omsk' },
    { firstName: 'Andrey', lastName: 'Fedorov', age: 31, city: 'Rostov-on-Don' },
  ];

  for (const userData of users) {
    const existingUser = await userRepository.findOne({ 
      where: { firstName: userData.firstName, lastName: userData.lastName } 
    });

    if (!existingUser) {
      const user = userRepository.create(userData);
      await userRepository.save(user);
      console.log(`Created user: ${user.firstName} ${user.lastName}`);
    } else {
      console.log(`User already exists: ${userData.firstName} ${userData.lastName}`);
    }
  }
}
