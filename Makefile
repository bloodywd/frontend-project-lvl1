# Makefile
install: # разворачивание и запуск
	npm install

install-deps:
	npm ci

brain-games: # 
	node bin/brain-games.js

brain-calc: # 
	node bin/brain-calc.js

brain-nod: # 
	node bin/brain-nod.js

brain-even: # 
	node bin/brain-even.js

publish: # 
	npm publish --dry-run

make lint: # 
	npx eslint .