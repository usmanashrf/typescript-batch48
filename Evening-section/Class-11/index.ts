// //overloads give us type-checked calls

// function add1(arg1: string, arg2: string){
// //body
// }

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string; //option 1

function add(arg1: number): number; //option 2

function add(arg1: boolean, arg2: boolean): boolean; //option 3

// //this is not part of the overload list,
// //so it has only three overloads
function add(arg1: any, arg2?: any): any {
  return arg1 + arg2;
}

// //Calling 'add' with any other parameter types would cause an error except for the three options
// // console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));

// // ============================================

// //number array

let arry: number[] = [832, 1535, 1315, 155];

//Tuple types have the advantage that you can accurately describe the type of an array of mixed types

var tuple: [number, string, boolean] = [531, "151", true];
var secondElement = tuple[1]; // secondElement now has type 'string'

// // =================================================

// // structural typing

class Human {
  name: string;

  constructor(userName: string) {
    this.name = userName;
  }
}

let humanObj = new Human("Usman"); //obj
humanObj.name;

// let obj ={
//     name:""
// }

class Human1 {
  name: string;
  constructor(name: string) {
    this.name = name;
    // this.age = age;
  }
  eat() {
    console.log(this.name + " is a Human and is eating");
  }
}

class Animal1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is a Animal and is eating");
  }
}

class WildAnimal1 {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  eat() {
    console.log(this.title + " is a Wild Animal and is eating");
  }
}

class Robot1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let h: Human1 = new Human("Tom");
let a: Animal1 = new Animal1("Goat");
let r: Robot1 = new Robot1("R2-D2");

// let h2 = h;

// h2 = a;
// h2.eat();

// let r2 = r;
// r = a;

// //  a = r;

// //Animal has a name, Robot also has a name
// // "a" is a stale object therefore extra eat() method in "a" is ok

// //a = r2;//Error, Robot does not have eat method

let hum: Human = new Animal("Dog"); //Fresh Object

// // But Fresh or stale both have same properties and methods
// // therefore compatible

// // let wild : Animal = new WildAnimal("Deer");//Fresh Object

let r0: Robot = new Animal("Donkey");

var isItRobot = r0 instanceof Robot;

console.log("R0 instance of ", isItRobot);

// ==========================================

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(meters: number = 0) {
    console.log(this.name + " moved " + meters + "m.");
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters = 5) {
    console.log("Slithering...");
    super.move(meters);
  }
  bite() {
    console.log("bites");
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters = 45) {
    alert("Galloping...");
    super.move(meters);
  }
}

class Donkey extends Animal {
  distance: number;

  constructor(name: string, distance: number) {
    super(name);
    this.distance = distance;
  }
  move(meters = 45) {
    alert("Moving...");
    super.move(meters);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters = 1) {
    alert("Jumping...");
    super.move(meters);
  }
}

let a: Animal = new Snake("Python");
a.move(5);
//Snake move method is called not Animals, this is because of polymorphism

let a1: Animal = new Horse("Rocket");
let h: Horse = a1; //explicit casting not require because Child object have same properties and fuctions
// let h2: Horse = a1 as Horse; //explicit will also works but not needed

let a2: Animal = new Donkey("Worker", 100);
let h3: Donkey = a2 as Donkey; //explicit casting require because Child object have additional properties or functions
// let h4: Donkey = a2; // Error -- will not work, explicit casting is required as above

let d1: Horse = new Donkey("Worker", 200);

console.log("is Animal? " + (d1 instanceof Animal)); // true
console.log("is Donkey? " + (d1 instanceof Donkey)); // true
console.log("is Horse? " + (d1 instanceof Horse));

let h1: Horse = new Cat("Kitten");
//why is this allowed? Because it has same properties and methods (structural type) not because of inheritance
//https://github.com/Microsoft/TypeScript/issues/5303

class A {
  constructor() {
    this.MyvirtualMethod();
  }
  protected MyvirtualMethod(): void {
    console.log("A");
  }
}

class B extends A {
  private testString: string = "B";

  public MyvirtualMethod2(): void {
    console.log(this.testString); // This becomes undefined
  }
}

let obj = new B();

// obj.testString

// public
// private
// protected

var passcode = "secret passcode";

class Employee {
  private _fullName: string | undefined;

  get fullName(): string | undefined {
    //you have to login
    return this._fullName;
  }

  set fullName(newName: string | undefined) {
    this._fullName = newName;
  }
}

var employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}
