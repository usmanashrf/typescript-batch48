const promptSync = require("prompt-sync")();

let userName = promptSync("Enter your Name.. ");

console.log("Your Name is  ", userName);

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

//========================================
//2- pass input but no returns

function greeting(userName: string) {
  console.log(`Hi, ${userName} this is greeting funciton`);
}

let result = greeting("Usman");

console.log("here is greeting value  ", result);

//===================================

//3- function returning some values

function greetingWithReturn(userName: string) {
  let val = `Hi ${userName} this is greetig but returning some values`;
  return val;
}
let greetingValues = greetingWithReturn("Usman");
// = `Hi ${userName} this is greetig but returning some values`;
console.log(greetingValues);

// ========================================

function sums(x: number, y: number) {
  return x + y;
}

function sum1() {
  let x = 10;
  let y = 15;
  return x + y;
}

let sumResult = sum1();

function sum2(x: number, y: number) {
  console.log("Sum is:", x + y);
}

function greetings(x: string, y: string) {
  console.log("Greetings from PIAIC");
  console.log("Hello from: ", x);
  console.log("Hello from: ", y);
}

greetings("Zia", "Usman");
//////////////////////////////////////////////
function sum(x: number, y: number) {
  return x + y;
}


//=================================
// Arrow fucntions
let sumX = (x: number, y: number) => {
    return x + y;
  };
  
  let results = sumX(10, 20);
  console.log(results);
  
//single  //no inpt and no reutrn
let add3 = () => console.log("Here is add3 values", 5 + 15);

let add4 = () => 5 + 30;

add3();

console.log(add4());

// ================================
//arrow functions with parameters

let add5 = (num1: number, num2: number) => num1 + num2;

add5(15, 20);

console.log(add5);


// ==========================================
//if else

var assignmentDone = true;
var halfAssignment = true;

if (assignmentDone == true) {
  console.log("Allowed in class");
} else if (halfAssignment == true) {
  console.log("You can also come in class ");
} else {
  console.log("You can not come to class ");
}
//////////////////////
let marks = 90;
if (marks >= 90 && marks <= 100) {
  console.log("Grade A+");
}
// 80-90 -> A
else if (marks >= 80 && marks < 90) {
  console.log("Grade A");
}

//70-80 -> B
else if (marks >= 70 && marks < 80) {
  console.log("Grade B");
}
//70 ->Fail
else if (marks < 70) {
  console.log("Fail");
} else {
  console.log("Invalid Input");
}

// =================================
// Array

let fruits = ["Apple", "Banana", "Peach", "Mango"];
// console.log(fruits[3])

// int arr[5] = [1,2,3,4,5]
let arr2 = [1, "Usman", true, "Afaq", 5];
console.log("Original Array is", arr2);
arr2.pop();
console.log("New array with pop", arr2);

//Push method
arr2.push(15);
console.log("New array with push is: ", arr2);

arr2.shift();
console.log("New array with shift is: ", arr2);

arr2.unshift("Zia Khan");
console.log("New array with unshift is: ", arr2);

//adding new value
arr2.splice(2, 0, "Ali");
console.log("After splice", arr2);

//replacing existing values
arr2.splice(2, 1, "Ali");
console.log("After splice", arr2);

//replacing existing values
arr2.splice(2, 1, "Ali", "Ahmed", "Hamza");
console.log("After splice", arr2);
