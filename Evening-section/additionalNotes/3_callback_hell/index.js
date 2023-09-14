//Concept we will cover:
//1-- Synchronous behaviour and callstack
//2-- Role of callbacks
//3-- Problem 1: Callback Hell
//4-- Probelm 2: Inversion of Control

//1-- Synchronous behaviour and callstack:
//As we know JS is synchronous single threaded language and it has one callstack and can do single operation at a time
//Callstack in Javascript: The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now.

//2-- Role of callbacks:
//The question arises here is what if we need to execute any function after some certain delay? How can we perform this delay function as callstack doesnot wait and it keep executing whatever comes inside it, and there is no question on blocking the main thread.
//So to tackle this problem, callbacks came into play: Callbacks used to be the main way asynchronous functions were implemented in JavaScript. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time.

//3-- Problem 1: Callback Hell: Callback hell is nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for previous callback, thereby making a pyramid structure that effects the readibility and maintability of the code.
//Example: Ecommerce Website cart operation depended on one another
//1. Create Order
//2. Payment
//3. Show Payment Summary
//4. Update Wallet

const cart = ["shirts", "jackets", "shoes"]; //just an example for understanding

api.CreateOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//One callback inside other callback inside another API, make this callback hell and our code grows horizontally instead of vertical which is called pyramid structure or pyramid of doom, which makes difficult in code maintainability and readability.
//Pyramid Doom:
job1(function () {
  doSomething1();

  job2(function () {
    doSomething2();

    job3(function () {
      doSomething3();

      job4(function () {
        doSomething4();
      });
    });
  });
});

//4-- Problem 2: Inversion of control
//It's like we lose the control of our code when using callbacks => Inversion of control is the notion of having code under your control in one part of program and then handing control over to a callback in another part of the program

const cart2 = ["shirts", "jackets", "shoes"]; //just an example for understanding

api.CreateOrder(cart, function () {
  api.proceedToPayment();
});

//Here proceedToPayment() method relies on CreateOrder() => we can only proceedToPayment() once we CreateOrder() this is dependency of one function into another. What if, for any reason method 1 could not initiate the dependent method or initiate it twice

//To visualize how callback and event loop works: https://wesbos.com/javascript/12-advanced-flow-control/66-the-event-loop-and-callback-hell
