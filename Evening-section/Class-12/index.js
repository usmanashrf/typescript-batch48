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
class Animal {
}
class Dog extends Animal {
    //overridding
    sound() {
        console.log("Dog will bark");
    }
    move() {
        console.log("Runnig");
    }
}
class Libra extends Dog {
    type() {
        console.log("we' ll diaplay type here");
    }
}
// var square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// // square.a = 5;//Error
class circle {
    color = "red";
    size = 10;
    sideLength = 5;
}
let circleObj = new circle();
console.log(circleObj.sideLength);
console.log(circleObj.color);
console.log(circleObj.size);
export {};
