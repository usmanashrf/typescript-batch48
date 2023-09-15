//1.1 -- FUNCTION STATEMENT/ FUNCTION DECLARATION
// funStatement(); // it created a memory and a function is assign to it.

function funStatement(){
    console.log("This is function statement also called as function declaration");
}
funStatement();

//1.2 -- FUNCTION EXPRESSION
//You can assign function to a variable. Here function will act like a value 
// functionExpression(); //it is created like a variable like any other variable, 
//it is assigned undefined initially until the code reaches to the actual funciton

var funExpression = function(){
    console.log("This is function Expression");
}
funExpression();

//Difference between function statement and function expression
//Major difference b/w two is Function Hoisting.
//short intro to function hoisting -- if we call function statement before declaration it will show an output 
//successfully but in we call function expression before function it will throw an Error 
//as it will consider it as a variable 

//1.3 -- ANONYMOUS FUNCTION:
//function without a name is called an anonmyous function

// function (){
//     console.log("Anonymous Function");
// }//this will result an error -- invalid syntax

//So what are the advantages of anonymous functions 
//Anonymous functions are used where functions are used as a value.
//Means you can assign function to a variable and eventually it will become function expression, where function is an anonmyous function but in function statement we cannot use an anonymous funcition

//1.4 -- NAMED FUNCTION EXPRESSION:
//Expression + Named function = Named function expression

var namedFun = function xyz(){
    console.log("This is Named function expression");
    // console.log(xyz);
}
namedFun();
// xyz(); //will give an error -- b/c this name is local variable and has local scope here and can access xyz inside a function.


//1.5 -- Difference b/w parameter and arguments:  DIY


//1.6 -- FIRST CLASS FUNCTION
//The ability of function to be used as a value and can be passed this as an argument to another function and can be returned from the function is called as first class function.
//First class function = first class citizens (refer by this in some books and articles)

//Call back Function
function value(){
    console.log("Function 1");
    // arg();

}
var arg = function(){
    console.log("Function 2");
}
value(arg);

