# Makefile
install: # разворачивание и запуск
	npm install

install-deps:
	npm ci

brain-games: # 
	node bin/brain-games.js

publish: # 
	npm publish --dry-run

make lint: # 
	npx eslint .