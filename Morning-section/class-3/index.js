"use strict";
const promptSync = require('prompt-sync')();
//let userName = promptSync("Enter your name.. ");
// console.log("your name is :", userName);
//=====================
//Functions
//keyword  name  (parameters)
function greeting() {
    //body
    console.log("this is greeting function");
}
//greeting();
//Type
//1- input, no return
//2- no input, but return values
//3- input, but return values as well
//1-input, no return
function greeting2(useName) {
    console.log(`Hi, ${useName} this is greeting2 function`);
}
//greeting2(userName)
//3- no input but return value
function add(n1, n2) {
    let a = 5;
    let b = 10;
    return a + b;
}
let result = add(5, 6);
//console.log("Here is the return value",result);
//
function add2() {
    let a = 15;
    let b = 10;
    console.log("Here is add2 values", a + b);
}
//add2();
// function add() {
//     let a= 5;
//     let b= 10;
//         return a+b
//     }
// let result = add(); //15
//' console.log("Here is the return value",result);
// Arrow fucntions
//single  //no inpt and no reutrn
let add3 = () => (console.log("Here is add3 values", 5 + 15));
let add4 = () => (5 + 30);
//add3();
//console.log(add4());
//arrow functions with parameters
let add5 = (num1, num2) => (num1 + num2);
//add5(15,20)
//console.log(add5);
//[21,25,27,29,32]
// ==========================================
//if else
// function gateEntry(haveCard:boolean){
//     if(haveCard == true){
//         return "Allowed"
//     }
//     else{
//         return "Not Allowed"
//     }
// }
// let entry = gateEntry(false);
// console.log(entry);
//else if
function gateEntry(haveCard) {
    if (haveCard == "PIAIC card") {
        return "Allowed";
    }
    else if (haveCard == "CNIC") {
        return "You can enter";
    }
    else {
        return "Not Allowed";
    }
}
let entry = gateEntry("passport");
console.log(entry);
