// import sum from "./first-module.js";
// sum();

import inquirer from 'inquirer';


const answer = await inquirer.prompt([{
    name:"userName",
    type:"text",
    message:"Enter your name.. "
},
{
    name:"userAge",
    type:"number",
    message:"Enter your age.. ",
    validate: function(userAge: number){
        if(userAge < 20){
            return "User age should be greater than 20"
        }
        return true;
    }
}])

console.log("your name is : ", answer.userName);