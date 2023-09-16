"use strict";
// console.log("Task 1");
// setTimeout(() => {
// console.log("Task 2");
// }, 2000);
// console.log("Task 3");
// setTimeout(() => {
//     console.log("Task 4");
//     }, 2000);
// console.log("Task 5");
// ====================================
// Weekend
// 1- car maintenance
// 2- do some Grocery
// 3- Laundry Dress 
// 4 - Attend event
// console.log("car maintenance");
// setTimeout(() => {
// console.log("do some Grocery");
// }, 2000);
// console.log("Laundry Dress");
// ============================
// Callbacks
// what is callback ?
// Pass a function within a function as a parameter
// function task1(anyfunction : any){
//     console.log("do something");
//     anyfunction("we are passing values to callback");
// }
// // task1(secondtask)
// task1(function secondtask(text:string){
//     console.log("this is a callback function.. ",text);
// })
// function carMaintenance(){
//     console.log("I leave my car at 9 in workshop");
// setTimeout(() => {
//     console.log("Car is fixed...");
//     return "Your car is ready"
// }, 2000);
// }
// function pickDress(){
//     setTimeout(() => {
//         return "Your Dress is ready"
//     }, 100);
// }
// let mechanicResponse = carMaintenance();
// console.log("mechanicResponse... ", mechanicResponse);
// setTimeout(() => {
//     console.log("Do grocery");
//     }, 0);
// let laundryResponse = pickDress();
// console.log("laundryResponse ...", laundryResponse);
// setTimeout(() => {
//     console.log("Attend Event");
//     }, 2000);
// =============================================
// Callbacks implementations
function carMaintenance(cb) {
    console.log("I leave my car at 9 in workshop");
    setTimeout(() => {
        console.log("Car is fixed...");
        cb("Your car is ready");
    }, 2000);
}
// function carMaintCallBack(text:string){
//     console.log("Car Maint Call back...",text);
//     pickDress(dressCallBack);
// }
function pickDress(callback) {
    setTimeout(() => {
        console.log("Your Dress is ready");
        callback("pick your dress");
    }, 100);
}
// function dressCallBack(text:string){
//     console.log("this is dress callback..",text);
//     attendEvent();
// }
function attendEvent(cb) {
    console.log("Now you can attend the event");
    cb("Now you can go home");
}
// function eventCallBack(text:string){
//     console.log(text);
//     BacktoHome();
// }
function BacktoHome() {
    console.log("reached home");
}
// ===========================
// functin calling
// carMaintenance(carMaintCallBack);
// setTimeout(() => {
//     console.log("Do grocery");
//     }, 0);
// ===============================
// CallBackHell
// carMaintenance(function (text:string){
//     console.log("Car Maint Call back...",text);
//     pickDress(function (text:string){
//         console.log("this is dress callback..",text);
//         attendEvent(function (text:string){
//             console.log(text);
//             BacktoHome();
//         });
//     });
// })
// ====================================
// Promises
function carMaintenance1() {
    console.log("I leave my car at 9 in workshop");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Car is fixed...");
            resolve("Your car is ready");
        }, 2000);
    });
    return result;
}
function pickDress1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Dress is ready");
            resolve("pick your dress");
        }, 100);
    });
    return promise;
}
// let mechanicResponse = carMaintenance1();
// mechanicResponse.
// then((text:string)=>{
//     console.log("Mechanic Response...",text);
//     return pickDress1();
// })
// .then((text:string)=>{
//     console.log("Laundry Response...",text);
// })
// .catch((err:any)=>{
//     console.log("Error",err);
// });
// function carMaintCallBack(text:string){
//     console.log("Car Maint Call back...",text);
//     pickDress(dressCallBack);
// }
// function dressCallBack(text:string){
//     console.log("this is dress callback..",text);
//     attendEvent();
// }
// function attendEvent1(cb: (text:string)=>void){
//     console.log("Now you can attend the event");
//     cb("Now you can go home")
// }
// function eventCallBack(text:string){
//     console.log(text);
//     BacktoHome();
// }
// function BacktoHome1(){
//     console.log("reached home");
// }
// =========================
function someTask(num) {
    let promiseObj = new Promise((resolve, reject) => {
        if (num > 3) {
            resolve("Promises are resolved here...");
        }
        else {
            reject("Promises are rejected here...");
        }
    });
    return promiseObj;
}
function task2() {
    let promiseObj = new Promise((resolve, reject) => {
        reject("task2 Promises are resolved here...");
    });
    return promiseObj;
}
let response = someTask(6);
response.then((text) => {
    console.log("then of values..", text);
    return task2();
}).then((text) => {
    console.log("then of task2..", text);
})
    .catch((err) => {
    console.log("This is catch..", err);
});
// console.log("Response...", response);
