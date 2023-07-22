const promptSync = require("prompt-sync")();

let userName = promptSync("Enter your name.. ");

console.log("your name is :", userName);

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

function greeting2(useName: string) {
  console.log(`Hi, ${useName} this is greeting2 function`);
}

greeting2("Usman");

//================================
//2- no input but return value

function add(n1: number, n2: number) {
  let a = 5;
  let b = 10;
  return a + b;
}

let result = add(5, 6);

console.log("Here is the return value", result);

function add2() {
  let a = 15;
  let b = 10;
  console.log("Here is add2 values", a + b);
}
add2();

//========================================
//3-  input, but return values as well
function addWithInputandOutput(num1: number, num2: number) {
  let value = `Here is add With Input and Output values ${num1} +${num2}`;
  return value;
}

let returnVal = addWithInputandOutput(30, 40);
console.log(returnVal);
function adds() {
  let a = 5;
  let b = 10;
  return a + b;
}
let results = adds(); //15
console.log("Here is the return value", results);

//=================================
// Arrow fucntions
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

function gateEntry2(haveCard: boolean) {
  if (haveCard == true) {
    return "Allowed";
  } else {
    return "Not Allowed";
  }
}

let entry2 = gateEntry2(false);

console.log(entry2);

//====================
//else if

function gateEntry(haveCard: string) {
  if (haveCard == "PIAIC card") {
    return "Allowed";
  } else if (haveCard == "CNIC") {
    return "You can enter";
  } else {
    return "Not Allowed";
  }
}

let entry = gateEntry("passport");

console.log(entry);

//======================================

//Arrays

let students = ["Ali", "Ahmed", "ibtisam", "Usman"];

//how to remove values in above given array

console.log("Initial array", students);

let popReturns = students.pop();

console.log("Pop is returing :", popReturns);
console.log("after", students);

//how to add values in above given array

let returnval = students.push("Zia");
console.log("pushing returnig", returnval);

console.log("after pushing new value", students);
//==================================
// shift
students.shift();
console.log("after shift", students);

//unshift
students.unshift("Jhon");
console.log("after unshift", students);

//==================================
//splice
students.splice(2, 1, "Umer", "abc", "xyz");
console.log("After splice", students);

//adding new value
students.splice(2, 0, "Ali");
console.log("After splice", students);

//replacing existing values
students.splice(2, 1, "Ali");
console.log("After splice", students);

//replacing existing values
students.splice(2, 1, "Ali", "Ahmed", "Hamza");
console.log("After splice", students);

//==================================
//slice

let sliceArray = students.slice(3);

console.log("slice array", sliceArray);
