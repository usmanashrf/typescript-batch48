let myName = "Usman";

myName = "Usman Ashraf";

const age = 25;

age = 30; //it'll give us error

/* var Address ="ISB";

let, const, var
*/
//let myName = "ALi";

if (true) {
  // let myName = "Usman's ";

  // myName="Usman Ashraf";

  // myName=123

  const age = 25;

  var Address = "ISB";

  console.log(myName);
  console.log(age);
}

//console.log(Address);

let abc;
let cd = null;

// =====================================

let stat = `Hi, This is  ${myName}
asklaasl
lsalslkas
jakskas
`;
let stat1 = "Hi, \n This is " + myName;

console.log("stat", stat);

console.log("stat1", stat1);

//how to check datatype

console.log(typeof stat1);

//const age =25;
console.log(typeof age);

///Operators

let num1 = 10;
let num2 = 5;
let add1 = "operators";
let add2 = "sum operstors will be here";

// Addition +

console.log(num1 + num2);
console.log(num1 - num2);

// -, /, *, ** %

// ================================

let numbers = 3;
let numbers2 = 10;

console.log(numbers2 % numbers);
// ========================================

// +=

console.log(numbers++); //post- first time it'll print 3

console.log(5 + numbers); // pre- it'll print 4

numbers = numbers + 5;
numbers += 5;
console.log(numbers);

//Assignment Operators
let number = 20;
let number2 = 10;

let result = number == number2;

let result1 = number <= number2;
console.log(result1);
//ture         true
console.log(number > 5 && number2 < 15);

//OR
//true        false
console.log(number < 5 || number2 > 15);
