COMPOSE   = docker compose --env-file .env

SERVICES := frontend

$(foreach s,$(SERVICES), \
  $(eval run-$(s): ; $$(COMPOSE) up -d $(s)) \
  $(eval rebuild-$(s): ; $$(COMPOSE) build --no-cache $(s) && $$(MAKE) run-$(s)) \
  $(eval logs-$(s): run-$(s) ; $$(COMPOSE) logs -f $(s)) \
)

stop:
	$(COMPOSE) stop

frontend-dev:
	$(COMPOSE) watch frontend

clean:
	docker system prune -f
	docker volume prune -f

build-frontend:
	./shell/build_front.sh

deploy-nginx: build-frontend
	docker rm -f homepage-nginx 2>/dev/null || true
	docker build -f docker/Dockerfile.nginx -t homepage-nginx .
	docker run -d --name homepage-nginx \
	    --restart unless-stopped \
		-p 5173:80 \
		homepage-nginx

.PHONY: $(foreach s,$(SERVICES),run-$(s) rebuild-$(s) logs-$(s)) \
	stop clean frontend-dev \
	build-frontend