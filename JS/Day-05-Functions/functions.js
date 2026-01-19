//! Functions:-
//*The is a block of code or set of instructions which is used to perform some specific task

//? Syntax:- function identifier(){ set of instruction };
//? function call statement:- identifier();
//* it is used to call/invoke function for execution and it is combination of identifier and paranthesis.

//! non-parameterized function
function greet(){
    console.log("Hello Guest");
}
greet();

//! parameterized function
function greeting(name){
    console.log(`Hello ${name}`);
}
greeting(sneh);

//! what is parameter?
//* Parameter is temporary variable which is declared inside the function defination.

//! what is argument?
//* the arguments are the actual value which is passed inside the function call statement.

//!Types of Function
//~ Named function
///* The function which has identifier is known as named function. 
//~ Anonymous function
//* The function which dosent have identifier is known as anonymous function.
//~ Function Expression
//~ IIFE
//~ Arrow Function
//~ callback function
//~ HOF
//~ Nested Function
//~ Closure Function
//~ Generator Function
//~ Function Currying