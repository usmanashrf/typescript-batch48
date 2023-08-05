"use strict";
//Loops
Object.defineProperty(exports, "__esModule", { value: true });
//For Loop
// for(initial, codition, itertation)
for (let number = 1; number <= 10; number++) {
    console.log("Hello");
}
let groceryItems = ["Bread", "egg", "milk", "coffee", "fruit", "Tea", "fruit", "veg", "fruit", "oil"];
let furitCounter = 0; // 0
for (let i = 0; i < groceryItems.length; i++) {
    if (groceryItems[i] == "fruit" && furitCounter >= 2) {
        continue;
    }
    else {
        console.log(`item no. ${i} which is ${groceryItems[i]}`);
        console.log("Pick from rack");
        console.log("putt in cart");
        console.log("================================");
    }
    if (groceryItems[i] === "fruit") {
        furitCounter++; //1
        // if(furitCounter >= 2 ){  //1 >= 2
        //     break;
        // }
    }
}
// ==============================================================
//Buy every item once
let buyItems = []; //"bread","egg","milk","friut"
for (let i = 0; i < groceryItems.length; i++) {
    let val = buyItems.includes(groceryItems[i]); //true / false
    // val == true
    if (!val) {
        console.log(`item no. ${i} which is ${groceryItems[i]}`);
        console.log("Pick from rack");
        console.log("putt in cart");
        console.log("================================");
        buyItems.push(groceryItems[i]);
    }
}
console.log(buyItems);
// ================================================
// Nested Loop
// outer loop{
//     // innerloop
// }
for (let outer = 1; outer <= 5; outer++) {
    for (let inner = 1; inner <= 3; inner++) {
        console.log(`outer loop value is ${outer}.... inner loop value is: ${inner}`);
    }
}
let firstName = ["Mike", " Jhon", "smith", "Dan"]; //row
let lastName = ["David", "Jack", "Khan"]; //col
let fullName = [];
for (let fName = 0; fName < firstName.length; fName++) { //outer loop
    for (let lName = 0; lName < lastName.length; lName++) {
        console.log(`Full name will be  ${firstName[fName]} ${lastName[lName]}`);
        fullName.push(`${firstName[fName]} ${lastName[lName]}`);
    }
}
console.log(fullName);
//=====================================================
// While Loops
// while(condition){
// }
let playerLife = 3;
while (playerLife != 0) {
    console.log("player life is ", playerLife);
    console.log("Game is runnig...");
    console.log("Game is runnig...");
    console.log("Game is runnig...");
    console.log("hit enemy");
    playerLife--;
    if (playerLife == 0) {
        console.log("******* gamer over **********");
    }
}
const firstModule_1 = require("./firstModule");
let g = 10;
// console.log("varible f is : ", aslskdal);
console.log("g value is :", firstModule_1.g);
