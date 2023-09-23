"use strict";
//overloads give us type-checked calls
//this is not part of the overload list, 
//so it has only three overloads
function add(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));
// ============================================
//number array
let arry = [832, 1535, 1315, 155];
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
var tuple = [531, "151", true];
var secondElement = tuple[1]; // secondElement now has type 'string' 
// =================================================
// structural typing
// class Human {
//   name : string;
//   constructor(userName:string){
//     this.name = userName
//   }
// }
// let humanObj = new Human("Usman") //obj
// humanObj.name;
// // let obj ={
// //     name:""
// }
class Human {
    constructor(name) {
        this.name = name;
        // this.age = age;
    }
    eat() {
        console.log(this.name + " is a Human and is eating");
    }
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Animal and is eating");
    }
}
class WildAnimal {
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(this.title + " is a Wild Animal and is eating");
    }
}
class Robot {
    constructor(name) {
        this.name = name;
    }
}
let h = new Human("Tom");
let a = new Animal("Goat");
let r = new Robot("R2-D2");
let h2 = h;
h2 = a;
h2.eat();
let r2 = r;
r = a;
// a = r;
//Animal has a name, Robot also has a name
// "a" is a stale object therefore extra eat() method in "a" is ok
//a = r2;//Error, Robot does not have eat method
let hum = new Animal("Dog"); //Fresh Object
// But Fresh or stale both have same properties and methods
// therefore compatible
// let wild : Animal = new WildAnimal("Deer");//Fresh Object
let r0 = new Animal("Donkey");
var isItRobot = r0 instanceof Robot;
console.log("R0 instance of ", isItRobot);
