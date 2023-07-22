# How to install prompt-sync

- Install prompt-sync by below command 

`	
	npm i prompt-sync
`
- Once you installed prompt-sync you have to import it in your code 
` 	
	const promptSync = require("prompt-sync")();
`
Here you'll get an error on require, becasue you don't have node types installed in your project

- Now we have to installed node types as a dev dependency by running below command
`
	npm i @types/node -D
`
After running above command in terminal require error will gone now you can get input from user
through console

`
	let userName = promptSync("Enter your name.. ");
`