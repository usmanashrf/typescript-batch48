
interface carModel {
    model: number,
    mileage : number
}


let BMW : carModel ={
    model:2023,
    mileage:120
}


function EngineEfficiency(car : carModel){

    let calculation = car.model * car.mileage

    return calculation;
}

EngineEfficiency(BMW);


// function Add(num1 :number , num2 : number){

//     let calculation =num1 + num2

//     return calculation;
// }

// Add(5, '15')
//  Add(BMW.mileage, BMW.model); 
//  Add(...BMW) // gives error
// ================================


interface MotorBike{
    model : number,
    mileage: number,
    speed : number
}

let H2R : MotorBike = {
    model :2025,
    mileage : 200,
    speed : 250
}

BMW = H2R
H2R = BMW


EngineEfficiency(H2R);
// =======================================

// BMW = {model : 2025, car_mileage :250}
BMW = H2R // H2R is stale obj
H2R = {model :2025, mileage : 200, speed : 250 }
// BMW =  {model :2025, mileage : 200, speed : 250 } //fresh


// =============================

// interface interface1 {
//     num1 : number
// }

// interface interface2 {
//     num1 : number
// }

// function anyCal(ab : interface1){

// }

//In nomianl typing 

// anyCal()

// ============================================


interface duck {
    canSwim : boolean,
    canFly: boolean,
    speice :"Bird"
}

function MyPet(pet : duck){

    if( pet.canSwim == true && pet.canFly == true){
        console.log("this is what you are looking for");
    }
    else{
    console.log("This is not a Duck");
    }
}

interface dog {
    canSwim : boolean,
    canFly: boolean
    readonly speice :"mmm"
}

let myDuck : duck ={

    canFly : true,
    canSwim : true,
    // speice
}

let germanShep : dog ={
    canFly : false,
    canSwim : true
}

myDuck = germanShep

germanShep = myDuck

MyPet(myDuck);
MyPet(germanShep);

// ==============================


interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;
  ball = sphere;


  interface Tube {
    diameter: number;
    length: number;
  }
  

  let tube: Tube = { diameter: 12, length: 3 };
  
//   tube = ball;//Error
  ball = tube;
  


  let myType = { 
    name: "Zia", 
    id: 1 
};

//Case 1
myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
									//Object literals can only have properties that exist in contextual type


//Case 2a
myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property
// =========================================

var x: { id: number, [x: string]: any };
// "sals" : string/boolean/{}/[]/null/undefined
var y: {id : number, xyz : string}

//  x = {id:25, 'sakdjs' : 25}
 
// x = {id:25, 'asas' : 'any Number'}

// y = {id : 15, xyz : true}

let z = {id : 15, name : "akskajs"}

x = y //comp
x = z;
y = x;

// =================================
// name : "akskajs"

// property Type  = string --------- this one

// property Value = "akskajs"

// property name/key = name --------- this one

// =========================================


//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name_person:: "Tom" };

// let myType = { 
//     name: "Zia", 
//     id: 1 
// };

// ================================

// What is Fresh object

let freshObject = {id : 1251, firstName :"firstName"};


// //stale object

// freshObject = myType2 //here myType2 is a stale object

// // ===================================
// freshObject = {id :55, firstName : "myName"}

// let secObj = freshObject
// //Case 1
// myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

// let myType3 = { id: 2,  name_person: "Tom" , your_name:"ali"};

// //Case 2a
// myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 

// ============================

let myTypes = { id: 2,  name_person: "Tom"};

let myType3 = { id: 2,  name_person: "Tom" , your_name:"ali"};

myTypes = myType3

myTypes =  { id: 2,  name_person: "Tom"};

// myType3 = {id: 2,  name_person: "Tom"}
myType3 = myTypes

// ========================================
