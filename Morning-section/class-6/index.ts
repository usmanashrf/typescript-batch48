//Union Types

// Without types 
let myName = "AFaq "

// with types 
let myName1 :  string = "afaq"
//myName1 = 55 //Error of different type

// // Unions 
// let age : string | number = "Declared Dead"

// age = 55 

// From Repo
let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

myname = undefined; //Error
myname = 12; //Error



// =============================

let userName = "Usman";

userName.toLowerCase();


function cashWithdraw(amount : string | number | boolean){
    // 20000
    // twenty thousand
    //amount.toString();
    // amount = "Thirty K";
    // amount.toLowerCase();
     
    // amount = 10000
    // amount / 100;

    if(typeof amount == 'string'){
        amount.toLowerCase();
    }
    else if(typeof amount == 'number')
    {
        amount / 100;
    }
    else{
        !amount
    }
}


cashWithdraw("Thirty Thousands");

// ====================================


 let newAge = Math.random() > 0.6 ? "Khan": 60;
// Syntax of ternary operator 
// condition ? true statement : False statement

 if(newAge == "Khan"){
    console.log(newAge);
 }
 else{
    newAge / 2;
 }
//  ====================================

let amount : 10000 | "10 k";
amount = 150000; //error
amount = "10 k";
amount = "20k";  //error


type colors = "Red" | "Green" | "Yellow";

let trafficLight : colors;


let command : "up" | "down" | "left" | "right";

trafficLight = "Red";
trafficLight = "Red"



let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
// age = "living";//Error


let newVariable : number | string | null | boolean;

type myType =  number | string | null | boolean;

let secVar : myType;

secVar = null;
secVar = undefined; //error
secVar = 150;
secVar = "abc"

// ===============================================

// Objects

// object has any Name => person
// propties
// Name, age, gender.

// syntax
// let /const objectName ={props}

let person = {
    name:"any Name",
    age: 50,
    gender : "M",
    'Home Address' :"ISB"
};


console.log(person.age);
console.log(person.gender);
console.log(person['Home Address']);
console.log(person['name']);
console.log(person['age']);

// ===============================

type PersonType = {
    firstName:string,
    age:number,
    gender : string
};


function studInfo(std : PersonType){
    std.firstName;
    std.age;
    std.gender
}

function employeeInfo (emp : PersonType){
    emp.firstName,
    emp.age,
    emp.gender
}

// =============================

// Nested Object

let addressObj = {
    HNo:4,
    stNo: 15,
    city:"ISB",
    postCode :46000
};

let teacher = {
    name:"any Name",
    age: 50,
    gender : "M",
    // address : addressObj
    address: {
        HNo:4,
        stNo: 15,
        city:"ISB",
        postCode :46000
    }
};


console.log(teacher.address.postCode);

console.log(teacher['address']['city']);

