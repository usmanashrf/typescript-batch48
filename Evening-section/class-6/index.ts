console.log("Hello")
let myName : string | null = "Afaq";

myName = null;

let myAge : string | number | null = 100

myAge = "100"
myAge = null;

myAge = true;

let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

myname = undefined; //Error
myname = 12; //Error

let myAge: string | number;

myAge = 16;//narrowing
console.log(myAge);

console.log(myAge.toLowerCase());//Error

let x : number = 15
let y : string = x.toString()

console.log(y.toUpperCase())

myAge = "Dont Know";//narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types 
                               //can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
                                //because of narrowing

let newAge = Math.random() > 0.6 ? "Khan": 60;
// math.random => 0 - 1 ; 0.5, 0.8 
// Ternary operator:
// condition ? True statement : false statement

if(Math.random() > 0.6){
    newAge = "khan"
}
else{
    newAge = 60
}

newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed(); // Ok: number
let a = 20.88899
console.log(a.toFixed())

let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
// age = "living";//Error


let zia: "zia";

zia = "zia";
// zia = "khan";//Error


let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

if (yourName) {
    yourName.toUpperCase(); // Ok: string
}

yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase();//OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;


// ===============================

let amt = "Ten Thounsand";
amt.toLowerCase();

function cashWithdraw(amount: number | string | boolean){
    
    //common type
    amount.toString();
    

     //amount = "Thirty K"
    //string
    if(typeof amount == 'string'){
         amount.toLowerCase();
    }
    else if(typeof amount == 'number'){
    amount / 100;
    }

    //amount = 5000
    //number
}

let age2: number | "died" | "unknown";

age2 = 17;
age2 ="ten"

// ===========================

// Type Aliases

let myVariable :   number | boolean | "Value";

 type myDataType =  number | boolean | "Value";


let secVar : myDataType;

// ==========================================

// Objects
// object has any name car
// contain some properties
// model, color, brand, type etc

//sytanx 
let carObj = {
    model : 2023,
    color : "black",
    brand : "abc",
    "Fuel avg": '15km'
}

console.log(carObj.color);
// console.log(carObj.brand);
console.log(carObj['brand']);
console.log(carObj['Fuel avg']);

// =========================
let answer = {
    name:"firstOpt",
    type:"text",
    message:"Ener First Number",
}

// ==========================
// Nested Objects

let addressVal = {
    HNo:"4/2",
    StNo:"12",
    City:"ISB",
    PostCode:46000
}

let person ={
    firstName:"Zia",
    LastName:"Khan",
    gender:"Male",
    address :addressVal,
    address2 :{
        HNo:"4/2",
        StNo:"12",
        City:"ISB",
        PostCode:46000
    }
}

console.log(person.address.City);

console.log(person['address']['StNo']);


type Human ={
    name:string,
    age:number,
    height:number
}


function PersonInfo(person: Human){

    person.age;

    person.height
}