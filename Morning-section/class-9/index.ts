//enum

enum matchResults {
  win = "won",
  lose = "lose",
  tie = "tie",
}

let team1Score = 200;
let team2Score = 204;

if (team1Score > team2Score) {
  console.log(`Team 1 has ${matchResults["win"]} the match`);
} else if (team2Score > team1Score) {
  console.log(`Team 2 has ${matchResults["win"]} the match`);
} else if (team1Score === team2Score) {
  console.log(`Match has ${matchResults.tie} `);
}

const enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Green;

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
var colorName = Color1[1]; //Not allowed with const enums
console.log(colorName);

const enum Color2 {
  Red = "red",
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2["Green"];
console.log(colorIndex);

// =====================================

// Arrays functions

const myArray1: Array<number> = [3, 4, 8, 6, 7, 8, 9];
const myArray2: number[] = [21, 22, 23, 24, 25];

console.log(typeof myArray1);

//1- indexOf

console.log(myArray1.indexOf(6));
let index = myArray1.indexOf(6);
console.log(index);

//2- lastIndexOf()
console.log(myArray1.lastIndexOf(8));

//3- array1.concat(array2)
let myArray3 = myArray1.concat(myArray2);
console.log(myArray3);
console.log(myArray1.concat([123, 105]));
let myarray = Array.from(myArray2);
console.log(myarray);
let myArray = [...myArray1];
console.log(myArray);

//4- Join with operator
console.log(myArray1.join("-"));
console.log(typeof myArray1.join());
console.log(myArray1.join());

//5- push() -- returns length of Array
let outPut = myArray1.push(500, 600, 700); //Might looks similar with concat but remember concat returns copy of array.
console.log(outPut);
console.log(myArray1);
console.log(myArray1.push(200));

//6- unshift() -- returns length of Array
let output = myArray1.unshift(500, 600, 700); //Might looks similar with concat but remember concat returns copy of array.
console.log(output);
console.log(myArray1);
console.log(myArray1.push(200));

//7- pop() -- returns value of removed item - Removes last element of Array
console.log(myArray1.pop());

//8- shift() -- returns value of removed item - Removes first element of Array
console.log(myArray1.shift());

//9- reverse() -- reverse the order in orginal Array
console.log(myArray1.reverse());
console.log(myArray1);
let myAray = [...myArray2].reverse();
console.log(myAray);
console.log(myArray2);

//10- slice()  Syntax: array.slice(start_index, end_index)
let myAry = myArray1.slice(-5, 4);
console.log(myAry);
console.log(myArray1);

//11- splice () Syntax: array.splice(index, number of elements to be replaced, element1,..,elementN)
//-- Returns removed elements and modifies original
console.log(`myArray1 = [3, 4, 8, 6, 7, 8, 9]`);
let outPutt = myArray1.splice(0, 2, 300, 400); // Replacing Items
let out_put = myArray1.splice(2, 0, 5); //Added Item
let outPuts = myArray1.splice(2, 1); //Removed Item
console.log(outPuts);
console.log(myArray1);

//12- toString()  --
let _outPut = myArray1.toString();
console.log(_outPut);
console.log(myArray1);

//13- filter() -- filtering items
let result = myArray1.filter((item) => item % 2 === 0);
console.log(result);
console.log(myArray1);

//14- map() -- performs operation
let res = myArray1.map((item) => item ** 2);
console.log(res);
console.log(myArray1);

const words = ["apple", "banana", "cherry"];
const wordInfo = words.map((element, index, array) => {
  return {
    word: element,
    length: element.length,
    position: index,
    totalWords: array.length,
  };
});
console.log(wordInfo);

//15- every() -- validation // Returns boolean
let _res = myArray1.every((item) => item % 2 == 0);
console.log(_res);
console.log(myArray1);
const myString = ["Red", "Yellow", "Blue", "Orange"];
let reslt = myString.every((item) => item.length !== 8);
console.log(reslt);

//16- some() -- validation // Returns boolean
let res_Arry = myArray1.some((item) => item % 2 == 0);
console.log(res_Arry);
console.log(myArray1);
const myStrings = ["Red", "Yellow", "Blue", "Orange"];
let resArry = myStrings.some((item) => item.length !== 8);
console.log(resArry);

//17- reduce() --
let outPutArry = myArray1.reduce((total, item) => total + item, 0);
console.log(outPutArry);
console.log(myArray1);

const my_Strings = ["Red", "Yellow", "Blue", "Orange"];
let red_array = my_Strings.reduce((acc, item) => {
  console.log("acc", acc);
  console.log("item", item);
  return acc + "," + item;
});
console.log("my output", red_array);
console.log(my_Strings);

//18- reduceRight()
let rRight = myArray1.reduceRight((acc, item) => acc + item, 5);
console.log(rRight);
console.log(myArray1);

// const myStrings = ['Red', 'Yellow', 'Blue', 'Orange']
// let outPut = myStrings.reduceRight ( (acc,item) => {
//     console.log("acc",acc)
//     console.log("item",item)
//     return acc + "," + item
// })
// console.log("my output",outPut)
// console.log(myStrings)

//19- sort()

//20- fill() // fills the value with single value and mutates the original array
// const myStrings = ['Red', 'Yellow', 'Blue', 'Orange']
// let outPut = myStrings.fill("White",0,2)
// console.log(outPut)
// console.log(myStrings)

// ================================================

//Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName("Bob"); //ok
let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok

// ============================================================

//anonymous function type with optional parameters
var buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};

//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildNames(firstName: string, lastName = "Khan"): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let results1 = buildName("Bob"); //works correctly because last parameter is optional
let results2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
let results3 = buildName("Bob", "Adams"); //correct

//anonymous function type with defult parameters
//(Note that the parameter type will be optional when used with defult value)
let buildName_1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName = "Khan"
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};
// ==================================================
// Rest Parameters

function build_Name(firstName: string, ...restOfName: string[]) {
  //Named function with Rest parameters
  return firstName + " " + restOfName.join(" ");
}

var employeeName = build_Name("Joseph", "Samuel", "Lucas", "MacKinzie");

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + " " + restOfName.join(" ");
};

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

// ==========================================

// Async statments
console.log("Task1");

//Time delay statement, it'll take 2 sec to execute
setTimeout(() => {
  console.log("Task2");
}, 2000);

console.log("Task3");

//Time delay statement, it'll take 1 sec to execute
setTimeout(() => {
  console.log("Task4");
}, 1000);

console.log("Task5");
