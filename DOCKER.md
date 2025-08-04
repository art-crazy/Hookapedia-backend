# Docker Setup for Hookapedia Backend

Этот документ описывает, как использовать Docker для разработки и деплоя Hookapedia Backend.

## Структура файлов

```
├── Dockerfile              # Production Dockerfile
├── Dockerfile.dev          # Development Dockerfile  
├── docker-compose.yml      # Production Docker Compose
├── docker-compose.dev.yml  # Development Docker Compose
├── .dockerignore           # Docker ignore file
├── healthcheck.js          # Health check script
└── Makefile               # Automation commands
```

## Требования

- Docker 20.10+
- Docker Compose 2.0+
- Make (опционально, для удобства)

## Быстрый старт

### Разработка

```bash
# Запуск окружения разработки
make dev

# Или вручную:
docker-compose -f docker-compose.dev.yml up -d --build
```

### Продакшн

```bash
# Запуск продакшн окружения
make prod

# Или вручную:
docker-compose up -d --build
```

## Команды Make

### Основные команды

```bash
make help          # Показать все доступные команды
make dev           # Полный цикл разработки (build + up + logs)
make prod          # Полный продакшн цикл (build + up + logs)
```

### Команды разработки

```bash
make build-dev     # Собрать development образ
make up-dev        # Запустить development контейнеры
make down-dev      # Остановить development контейнеры
make logs-dev      # Показать логи development контейнеров
make restart-dev   # Перезапустить development контейнеры
```

### Команды продакшн

```bash
make build         # Собрать production образ
make up            # Запустить production контейнеры
make down          # Остановить production контейнеры
make logs          # Показать логи production контейнеров
make restart       # Перезапустить production контейнеры
```

### Утилиты

```bash
make shell         # Войти в shell приложения (production)
make shell-dev     # Войти в shell приложения (development)
make db-shell      # Войти в PostgreSQL (production)
make db-shell-dev  # Войти в PostgreSQL (development)
make test          # Запустить тесты в контейнере
make clean         # Удалить все контейнеры, образы и volumes
make status        # Показать статус контейнеров
make health        # Проверка здоровья сервисов
```

## Порты

### Production
- **3001** - Backend API
- **5432** - PostgreSQL
- **6379** - Redis

### Development  
- **3001** - Backend API
- **9229** - Debug port для Node.js
- **5433** - PostgreSQL
- **6380** - Redis

## Переменные окружения

Создайте `.env` файл для локальной разработки:

```env
# Database
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=hookapedia

# Application
NODE_ENV=development
PORT=3001

# Redis (если используется)
REDIS_HOST=redis
REDIS_PORT=6379
```

### Переменные для CI/CD

В GitHub Secrets настройте:

```
SERVER_IP=your.server.ip
SSH_USER=your_ssh_user
SSH_PRIVATE_KEY=your_private_key
DB_HOST=your_db_host
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=hookapedia
GITHUB_TOKEN=automatic_token
```

## Health Check

Приложение включает health check на эндпоинте `/health`. Добавьте в ваш NestJS app controller:

```typescript
@Get('health')
getHealth() {
  return { status: 'ok', timestamp: new Date().toISOString() };
}
```

## Мониторинг

### Просмотр логов

```bash
# Все сервисы
docker-compose logs -f

# Конкретный сервис
docker-compose logs -f app
docker-compose logs -f postgres
docker-compose logs -f redis
```

### Состояние контейнеров

```bash
docker-compose ps
make status
make health
```

## Отладка

### Development режим

В development режиме доступна отладка через порт 9229:

```bash
# Запустите development окружение
make up-dev

# Подключите VS Code debugger к localhost:9229
```

### Доступ к базе данных

```bash
# Production
make db-shell

# Development  
make db-shell-dev

# Или через внешний клиент:
# Production: localhost:5432
# Development: localhost:5433
```

## CI/CD Pipeline

Pipeline автоматически:

1. **Build** - собирает Docker образ
2. **Push** - загружает в GitHub Container Registry
3. **Deploy** - деплоит на сервер через SSH

### Ручной деплой

```bash
# На сервере
docker pull ghcr.io/your-username/hookapedia-backend:latest
docker stop hookapedia-backend || true
docker rm hookapedia-backend || true
docker run -d --name hookapedia-backend \
  --restart unless-stopped \
  -p 3001:3001 \
  -e NODE_ENV=production \
  -e DB_HOST=your_db_host \
  ghcr.io/your-username/hookapedia-backend:latest
```

## Troubleshooting

### Распространенные проблемы

1. **Порт уже занят**
   ```bash
   # Проверьте какой процесс использует порт
   lsof -i :3001
   # Остановите конфликтующие контейнеры
   make down
   ```

2. **Ошибка подключения к БД**
   ```bash
   # Проверьте, что PostgreSQL запущен
   make status
   # Перезапустите сервисы
   make restart
   ```

3. **Проблемы с volumes**
   ```bash
   # Полная очистка
   make clean
   # Пересборка
   make build
   ```

## Производительность

### Оптимизация образа

- Используется multi-stage build
- Минимальный Alpine Linux образ
- Только production зависимости в final stage
- Non-root пользователь для безопасности

### Кэширование

- Docker layer caching в CI/CD
- NPM кэш очищается после установки
- Buildx cache для ускорения сборки

## Backup и восстановление

### База данных

```bash
# Backup
docker exec hookapedia-postgres pg_dump -U postgres hookapedia > backup.sql

# Restore
docker exec -i hookapedia-postgres psql -U postgres hookapedia < backup.sql
```

### Volumes

```bash
# Backup volumes
docker run --rm -v hookapedia_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres_backup.tar.gz -C /data .

# Restore volumes
docker run --rm -v hookapedia_postgres_data:/data -v $(pwd):/backup alpine tar xzf /backup/postgres_backup.tar.gz -C /data
```
