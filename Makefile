# ROOT DIR
ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
# END OF ROOT BEER

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
help: ## This is help. Ignorance is futile.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
# NO HELP BEYOND THIS POINT

# MAIN

.PHONY: dev
dev: ## Starts the Dev-Server (with live update).
	@docker-compose up -d --build

.PHONY: debug
debug: ## Show logs of mkdown2-container.
	@docker-compose logs -f -t mkdown2

.PHONY: dev-stop
dev-stop: ## Stops all Server.
	@docker-compose down

.PHONY: dev-restart
dev-restart: dev-stop dev ## Restarts the Server.

.PHONY: build
build: ## Build App.
	docker build --target build-stage -t mkdown2-build .
	docker run -it --rm --detach --name mkdown2-build mkdown2-build
	docker cp mkdown2-build:/app/dist ./dist
	docker stop mkdown2-build

.PHONY: production
production: ## Run production server.
	docker build -t mkdown2 .
	docker run -it -p 4127:80 --rm --detach --name mkdown2-production mkdown2

.PHONY: production-stop
production-stop: ## Stop production server.
	docker stop mkdown2-production

.PHONY: dev-clean
dev-clean: ## Removes all docker volumes for a clean restart.
	@docker-compose down --rmi all --volumes --remove-orphans