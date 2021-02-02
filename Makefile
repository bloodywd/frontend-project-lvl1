# Makefile
install: # разворачивание и запуск
	npm install

brain-games: # 
	node bin/brain-games.js

publish: # 
	npm publish --dry-run

make lint: # 
	npx eslint .