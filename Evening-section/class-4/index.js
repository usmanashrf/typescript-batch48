"use strict";
//Loop
Object.defineProperty(exports, "__esModule", { value: true });
//For loop
// for( initialization; condition; iteration)
let groceryItems = ["Bread", "cooking oil", "egg", "milk", "veg", "fruits"];
for (let item = 0; item < groceryItems.length; item++) {
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
}
// ======================================
// let groceryItems = ["Bread","cooking oil", "egg","milk","veg", "egg","fruits","egg"]
let eggCounter = 0;
for (let item = 0; item < groceryItems.length; item++) {
    if (groceryItems[item] == "egg" && eggCounter > 0) {
        continue; //skip
    }
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
    if (groceryItems[item] == "egg") {
        eggCounter++;
    }
}
// ========================================
// how to comment multilines of code through shortcut keys
// ctrl + k +c  for comment
// ctrl + k+ u for uncomment
// ctrl + /   for both
//============================
//Buy item only Once
//let groceryItems = ["Bread","cooking oil", "egg","milk","veg","milk","cooking oil",  "egg","fruits","egg"]
let buyItems = [];
for (let item = 0; item < groceryItems.length; item++) {
    let val = buyItems.includes(groceryItems[item]);
    if (val) {
        continue;
    }
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
    buyItems.push(groceryItems[item]);
}
//====================================================
//Buy items till milk
//let groceryItems = ["Bread","cooking oil", "egg","milk","veg","fruits"]
for (let item = 0; item < groceryItems.length; item++) {
    console.log(`item no, ${item} which is ${groceryItems[item]}`);
    console.log(`pick from rack`);
    console.log(`putt in you cart`);
    console.log(`===========================`);
    if (groceryItems[item] == "milk") {
        break;
    }
}
// =====================================
let arry = ["Usman", "Zia", "Wania"], temp;
for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
        if (arry[j] < arry[i]) {
            temp = arry[i];
            arry[i] = arry[j];
            arry[j] = temp;
        }
    }
}
console.log(arry);
//============================================================
// Task
// let arr1=[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20]
// 1. Find Even Numbers in an Array
// 2.Find Odd numbers in an Array
// 3.Find Sum of Array Elements
// 4.Find Maximum Number in an Array
// 5.Filter Positive Numbers from an Array and their sum
// 6.Filter Negative Numbers from an Array and their sum
//==========================================================
// Nested Loop
// Loop with in the Loop
//2D rows column 
let firstName = ["Jhon", "Smith", "Luke", "Dan"]; //row
let lastName = ["Brown", "David", "Mike"]; //col
let fullName = [];
for (let fName = 0; fName < firstName.length; fName++) {
    lastName[fName];
    for (let lName = 0; lName < lastName.length; lName++) {
        console.log(`Full Name will be ${firstName[fName]} ${lastName[lName]}`);
        fullName.push(`${firstName[fName]} ${lastName[lName]}`);
    }
}
console.log(fullName);
//===================================================================
// While
let state = "normal";
let counter = 0;
while (state != "hit") {
    console.log("runnig...");
    console.log("runnig...");
    console.log(counter);
    ++counter;
    if (counter == 3) {
        state = "hit";
    }
}
//===========================================
// lett message = "Hello World";//syntax error
// console.log(message);
// let message = "Hello World";
// console.loger(message);
// let message = "Hello World";
// message = 6;
// console.log(message);
// let myName= "Usman";
// let city= "ISB";
//====================================
//Modules 
const firstModule_1 = require("./firstModule");
const firstModule_2 = require("./firstModule");
console.log(firstModule_2.city);
const firstModule_3 = require("./firstModule");
// let myName= "Usman"
// sirName= "Mr. Zia"
console.log(firstModule_3.myName);
console.log(firstModule_1.myName);
console.log(firstModule_1.myName);
//console.log(ksjdksda);
