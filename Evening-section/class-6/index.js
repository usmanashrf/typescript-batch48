"use strict";
// console.log("Hello")
// let myName : string | null = "Afaq";
// myName = null;
// let myAge : string | number | null = 100
// myAge = "100"
// myAge = null;
// myAge = true;
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
//myname = undefined; //Error
//myname = 12; //Error
let myAge;
myAge = 16; //narrowing
console.log(myAge);
// console.log(myAge.toLowerCase());//Error
let x = 15;
let y = x.toString();
console.log(y.toUpperCase());
myAge = "Dont Know"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types 
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string 
//because of narrowing
let newAge = Math.random() > 0.6 ? "Khan" : 60;
// math.random => 0 - 1 ; 0.5, 0.8 
// Ternary operator:
// condition ? True statement : false statement
// if(Math.random() > 0.6){
//     newAge = "khan"
// }
// else{
//     newAge = 60
// }
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed(); // Ok: number
let a = 20.88899;
console.log(a.toFixed());
let age;
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
// age = "living";//Error
let zia;
zia = "zia";
// zia = "khan";//Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
let data;
// ===============================
let amt = "Ten Thounsand";
amt.toLowerCase();
function cashWithdraw(amount) {
    //common type
    amount.toString();
    //amount = "Thirty K"
    //string
    if (typeof amount == 'string') {
        amount.toLowerCase();
    }
    else if (typeof amount == 'number') {
        amount / 100;
    }
    //amount = 5000
    //number
}
// let age2: number | "died" | "unknown";
// age2 = 17;
// age2 ="ten"
// ===========================
// Type Aliases
let myVariable;
let secVar;
// ==========================================
// Objects
// object has any name car
// contain some properties
// model, color, brand, type etc
//sytanx 
let carObj = {
    model: 2023,
    color: "black",
    brand: "abc",
    "Fuel avg": '15km'
};
console.log(carObj.color);
console.log(carObj.brand);
console.log(carObj['brand']);
console.log(carObj['Fuel avg']);
