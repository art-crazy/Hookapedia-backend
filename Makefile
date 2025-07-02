# Makefile for Hookapedia Backend Docker Management

# Variables
DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_DEV = docker-compose -f docker-compose.dev.yml
IMAGE_NAME = hookapedia-backend
CONTAINER_NAME = hookapedia-backend

# Colors for output
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[0;33m
BLUE = \033[0;34m
NC = \033[0m # No Color

.PHONY: help build build-dev up up-dev down down-dev logs logs-dev clean test install

# Default target
help:
	@echo "$(BLUE)Hookapedia Backend Docker Management$(NC)"
	@echo ""
	@echo "$(GREEN)Production Commands:$(NC)"
	@echo "  make build     - Build production Docker image"
	@echo "  make up        - Start production containers"
	@echo "  make down      - Stop production containers"
	@echo "  make logs      - Show production container logs"
	@echo ""
	@echo "$(YELLOW)Development Commands:$(NC)"
	@echo "  make build-dev - Build development Docker image"
	@echo "  make up-dev    - Start development containers with hot reload"
	@echo "  make down-dev  - Stop development containers"
	@echo "  make logs-dev  - Show development container logs"
	@echo ""
	@echo "$(BLUE)Utility Commands:$(NC)"
	@echo "  make clean     - Remove all containers, images, and volumes"
	@echo "  make test      - Run tests in container"
	@echo "  make install   - Install dependencies in container"
	@echo "  make shell     - Access container shell"
	@echo "  make db-shell  - Access database shell"

# Production Commands
build:
	@echo "$(GREEN)Building production Docker image...$(NC)"
	$(DOCKER_COMPOSE) build --no-cache

up:
	@echo "$(GREEN)Starting production containers...$(NC)"
	$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)Containers started! Backend available at http://localhost:3000$(NC)"

down:
	@echo "$(YELLOW)Stopping production containers...$(NC)"
	$(DOCKER_COMPOSE) down

logs:
	@echo "$(BLUE)Showing production container logs...$(NC)"
	$(DOCKER_COMPOSE) logs -f

# Development Commands
build-dev:
	@echo "$(GREEN)Building development Docker image...$(NC)"
	$(DOCKER_COMPOSE_DEV) build --no-cache

up-dev:
	@echo "$(GREEN)Starting development containers with hot reload...$(NC)"
	$(DOCKER_COMPOSE_DEV) up -d
	@echo "$(GREEN)Development containers started!$(NC)"
	@echo "$(GREEN)Backend available at http://localhost:3001$(NC)"
	@echo "$(GREEN)Debug port available at localhost:9229$(NC)"

down-dev:
	@echo "$(YELLOW)Stopping development containers...$(NC)"
	$(DOCKER_COMPOSE_DEV) down

logs-dev:
	@echo "$(BLUE)Showing development container logs...$(NC)"
	$(DOCKER_COMPOSE_DEV) logs -f

# Utility Commands
clean:
	@echo "$(RED)Removing all containers, images, and volumes...$(NC)"
	$(DOCKER_COMPOSE) down -v --rmi all
	$(DOCKER_COMPOSE_DEV) down -v --rmi all
	docker system prune -f
	@echo "$(GREEN)Cleanup completed!$(NC)"

test:
	@echo "$(BLUE)Running tests in container...$(NC)"
	docker run --rm -v $(PWD):/app -w /app node:20-alpine sh -c "npm ci && npm test"

install:
	@echo "$(BLUE)Installing dependencies in container...$(NC)"
	docker run --rm -v $(PWD):/app -w /app node:20-alpine npm ci

shell:
	@echo "$(BLUE)Accessing application container shell...$(NC)"
	$(DOCKER_COMPOSE) exec app sh

shell-dev:
	@echo "$(BLUE)Accessing development container shell...$(NC)"
	$(DOCKER_COMPOSE_DEV) exec app sh

db-shell:
	@echo "$(BLUE)Accessing database shell...$(NC)"
	$(DOCKER_COMPOSE) exec postgres psql -U postgres -d hookapedia

db-shell-dev:
	@echo "$(BLUE)Accessing development database shell...$(NC)"
	$(DOCKER_COMPOSE_DEV) exec postgres psql -U postgres -d hookapedia_dev

# Health checks
status:
	@echo "$(BLUE)Container Status:$(NC)"
	docker ps --filter "name=hookapedia"

health:
	@echo "$(BLUE)Health Check:$(NC)"
	$(DOCKER_COMPOSE) ps

# Restart containers
restart:
	@echo "$(YELLOW)Restarting production containers...$(NC)"
	$(DOCKER_COMPOSE) restart

restart-dev:
	@echo "$(YELLOW)Restarting development containers...$(NC)"
	$(DOCKER_COMPOSE_DEV) restart

# Quick development workflow
dev: down-dev build-dev up-dev logs-dev

# Quick production workflow  
prod: down build up logs
