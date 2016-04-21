deploy:
	node_modules/.bin/webpack
	scp index.html character.png staging:$(path)/
	scp dist/bundle.js staging:$(path)/static/
