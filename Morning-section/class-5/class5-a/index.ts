import inquirer from 'inquirer';


const answer = await inquirer.prompt([{
    name:"userName",
    type:"text",
    message:"Enter your name... "
}]);

console.log(answer.userName);