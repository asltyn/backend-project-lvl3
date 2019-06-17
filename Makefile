start:
	npx babel-node src/bin/pageloader.js

lint:
	npx eslint .

test:
	npm run test

publish:
	npm publish --dry-run
