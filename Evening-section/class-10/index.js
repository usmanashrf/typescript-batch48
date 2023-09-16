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
function carMaintCallBack(text) {
    console.log("Car Maint Call back...", text);
    pickDress(dressCallBack);
}
function pickDress(callback) {
    setTimeout(() => {
        console.log("Your Dress is ready");
        callback("pick your dress");
    }, 100);
}
function dressCallBack(text) {
    console.log("this is dress callback..", text);
    attendEvent();
}
function attendEvent() {
    console.log("Now you can attend the event");
}
carMaintenance(carMaintCallBack);
setTimeout(() => {
    console.log("Do grocery");
}, 0);
// let laundryResponse = pickDress();
// console.log("laundryResponse ...", laundryResponse);
// setTimeout(() => {
//     console.log("Attend Event");
//     }, 2000);
