// Intersection

interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = Student & Teacher;
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
    
console.log(obj1.teacher_Id);
console.log(obj1.name);

//==============================================


// // Any

// let myval: any;
// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK



// myval.toString();
// myval.toFixed();
// //Unknown
// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "hey!"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = () => { console.log('Hey again!'); }; // OK

// if(typeof value == "string"){
//     value.toString();
// }
// if(typeof value == "number"){
//     value.toFixed();
// }

// ===============================

// let result : string;
// result = myval  //any

// result = value;  //unknown




// // Assigning a value of type unknown to variables of other types

// let val: unknown;

// const val1: unknown = val; // OK
// const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// ===========================================

// Casting

let myname = 6;
//  let res = myname as string

 let stringVal = myname.toString();  //"6"
 console.log("type of res...",typeof stringVal);
//  console.log("type of res...",typeof res);

console.log((myname as unknown as string).length);

// myname.length



// console.log((<string> myname).length


// ==========================

let ID = 55142;
// PIAIC55142


function generateStudentCard(cardNumber :number){

    let rollNumber = `PIAIC${cardNumber}`

    if(rollNumber.length < 5){
        rollNumber = cardNumber as unknown as string;
    }
    else{
        rollNumber  = rollNumber;
    }

    return rollNumber;
}

let card = generateStudentCard(26)

console.log(card);


let RNumber = 555555;

// let lengthNumber = (RNumber as unknown as string).length;

// console.log(((RNumber as unknown)  as string).length);

let lengthNumber = (RNumber.toString()).length;
console.log(lengthNumber);
console.log("type of RNumber",typeof RNumber);

// let myname1: unknown = "Zia";
// console.log((myname1 as string).length);