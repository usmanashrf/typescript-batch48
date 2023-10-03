//Abstraction


// abstract class Base {
//     foo(): number { return this.bar(); }
//     abstract bar() : number;
// }

// class E extends Base { // okay -- implements abstract method
//     bar() { return 1; }
// }

// // var obj1 = new Base();//Error, cannnot create a instance of a Abstract class

// console.log(obj1.foo());


abstract class Animal{
   abstract sound(): void;
   abstract move() : void;
   abstract type(): void;
}

 abstract class Dog extends Animal{
 //overridding
    sound(): void {
        console.log("Dog will bark");
    }
    move(): void {
        console.log("Runnig");
    }
    abstract type(): void;
}

class Libra extends Dog{
    type(): void {
        console.log("we' ll diaplay type here");
    }
}

// let dg = new Dog();

// dg.move();
// dg.sound();


// ================================================

interface Shape{
    color:string;
    size:number;
}

interface Square extends Shape {
    sideLength: number;
}

// var square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// // square.a = 5;//Error

class circle implements Square{
    color:string ="red";
    size:number= 10;
    sideLength: number= 5;
}

let circleObj = new circle();

console.log(circleObj.sideLength);

console.log(circleObj.color);

console.log(circleObj.size);