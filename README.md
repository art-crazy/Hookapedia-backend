# Hookapedia Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Backend API для приложения Hookapedia - каталога рецептов для кальяна</p>

## 📋 Описание

Backend API построен на NestJS фреймворке с использованием TypeScript. Предоставляет RESTful API для управления рецептами кальяна, коллекциями и категориями.

## 🚀 Технологии

- **NestJS** - Node.js фреймворк
- **TypeScript** - Типизированный JavaScript
- **PostgreSQL** - База данных
- **TypeORM** - ORM для работы с БД
- **Docker** - Контейнеризация
- **GitHub Actions** - CI/CD

## 🏗️ Архитектура

```
src/
├── api/           # API контроллеры и DTO
├── entities/      # TypeORM сущности
├── modules/       # NestJS модули
├── services/      # Бизнес-логика
├── seeds/         # Начальные данные
└── migrations/    # Миграции БД
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

**Примечание:** Сервер запускается на порту 3001 по умолчанию. Вы можете изменить порт, установив переменную окружения `PORT`.

Приложение будет доступно по адресу [http://localhost:3001](http://localhost:3001).

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 🐳 Docker Setup

### Для разработки

```bash
# Запуск development окружения
make dev

# Или вручную
docker-compose -f docker-compose.dev.yml up -d --build
```

### Для продакшна

```bash
# Запуск production окружения
make prod

# Или вручную
docker-compose up -d --build
```

### Полезные команды

```bash
make help          # Показать все доступные команды
make logs          # Просмотр логов
make shell         # Войти в контейнер приложения
make db-shell      # Войти в PostgreSQL
make clean         # Удалить все контейнеры и образы
```

**Порты:**
- Production: `http://localhost:3001`
- Development: `http://localhost:3001` (с hot reload)
- Database: `localhost:5432` (prod) / `localhost:5433` (dev)

Подробную документацию по Docker см. в [DOCKER.md](./DOCKER.md)

## 🚀 CI/CD

Проект настроен для автоматического деплоя через GitHub Actions:

1. **Build** - Собирает Docker образ и загружает в GitHub Container Registry
2. **Deploy** - Автоматически деплоит на сервер при push в master

### Настройка секретов

Для работы CI/CD настройте GitHub Secrets согласно [GITHUB_SECRETS.md](./GITHUB_SECRETS.md)

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please хуй [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
