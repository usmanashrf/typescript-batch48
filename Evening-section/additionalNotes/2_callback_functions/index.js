//What are callback function in JAVASCRIPT:
setTimeout(function(){
    console.log("Timer");
}, 3000);

function x(y){
    console.log("This is X function");
    y();
}

x(function y(){
    console.log("This is Y function");
})
console.log("Wait");

//In JS is synchronous and single threaded means it will execute 1 line at a time.
//Js has single call stack/ main thread. Everything excuted inside the page will executed through the callstack
//                  "SO"
//If any heavy operation will take more time to excute like (20- 30secs),by the time JS has only 1 call stack so it won't be able to execute anyother function in the code it will block the main thread/call stack called as blocking the main thread

//To avoid blocking the main thread -- we go for asynchronous behaviour just like we did with setTimeOut()
//setTimeOut will take the callback and will execute this piece of code somewhere else and it will empty the call stack and get out of the call stack.
//Using WebAPIs (setTimeOut) + callback = we can achieve the asynchronous behaviour.

//Asynchronous code is always executed after the main thread
//Never trust the delay given to the setTimeout function. You can only specify a minimum delay. Even if you set a 0 delay, your code could be executed much later.

setTimeout(function () {
    console.log("I am an asynchronous message");
  }); // You can omit the 0
  
  console.log("Test 1");
  
  for (let i = 0; i < 10; ++i) {
    console.log(doSomeStuff());
  }
  
  console.log("Test 2");
  
  // The 'I am an asynchronous message' will be displayed when the main thread reach here
  
  function doSomeStuff() {
    return "Function doSomestuff";
  }
  
  //setInterval
  //setInterval has the same behavior as setTimeout but the code is executed multiple times.
  //You have to call clearInterval to kill the timer.
  
  let counter = 0;
  
  let timer = setInterval(function () {
    console.log("I am an asynchronous message");
  
    counter += 1;
  
    if (counter >= 5) {
      clearInterval(timer);
    }
  }, 1000);
  
  console.log("I am a synchronous message");
  
  //With more and more asynchronous code and features in recent frameworks, we need something to manage it. Here comes our savior: the Promise class.
  //It is now the standard way to deal with asynchronous code
  