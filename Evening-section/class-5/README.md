## Steps to create ECMAScript(ES) Modules

1. Create new empty folder
2. open that folder in vs code
3. open new terminal
4. run these commands 
a. tsc –init
b. npm init -y 
c. npm I @types/node -D


### ECMAScript conversion:
- Go to Package.json file and add type property as module

`
	"main": "index.js",
	add this line after main line 
	"type": "module",
`

- Go in tsconfig.json file and change following properties

`
	“target”: “ES2020”
	“module”: “NodeNext”
	“moduleResolution”: “NodeNext”
`

## How to install Inquirer library
- Here is the commands to install inquirer library and it's types
https://www.npmjs.com/package/inquirer

`
	npm I inquirer
	npm I @types/inquirer -D
`

- Similarly install chalk library as well
https://www.npmjs.com/package/chalk
