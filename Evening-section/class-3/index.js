"use strict";
// const promptSync = require('prompt-sync')();
// let userName = promptSync("Enter your Name.. ");
// console.log("Your Name is  ",userName);
//[21,25,30,45]
// ======================================
// Functions
//types
// 1- no input no return
// 2- pass input but no return
//3- pass input and return output
// 1- no input and no return
//keyword functionName (params)
function printMessage() {
    //body
    console.log("Hi, this is function printing some message");
}
// printMessage();
// printMessage();
//2- pass input but no returns
function greeting(userName) {
    console.log(`Hi, ${userName} this is greeting funciton`);
}
// let result = greeting("Usman");
// console.log("here is greeting value  ", result);
//2- function returning some values
function greetingWithReturn(userName) {
    let val = `Hi ${userName} this is greetig but returning some values`;
    return val;
}
let greetingValues = greetingWithReturn("Usman");
console.log(greetingValues);
