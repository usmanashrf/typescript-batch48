# How to Deploy on NPM

- create account on npm https://www.npmjs.com/

- Add bin property in package.json file add path of main file
`
	"bin": "./index.js",  
`	
- Add shebang string on very first line of your main file
`
	#!/usr/bin/env node
`	
- Now in your project terminal run command 
`
	npm login
`
- After login run command
`
	npm publish
`
- Once your project deployed on npm then open your npm account in browswer go to your packages and you'll find your deployed npm project
 

`
