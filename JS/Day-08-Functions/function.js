//!Example of Callback Function:
//? 1st way to create a callback function:
//~ we will create the seperate another function and pass it as reference to the main function.

function sir(studentname, callback){
    console.log("Sir is checking papers!");

    setTimeout(()=>{
        console.log("paper checked");
        console.log(`Result for ${studentname}`);
        callback();
    }, 3000);
}

//~ callback function
function result(){
    console.log("PASS");
}

//sir("sneh", result);

//? 2nd way: Directly mention the callback function inside the main function.

function orderFood(callback){
    console.log("food is ordered");
    callback();
}
//? by arrow function
orderFood(()=>{
    console.log("Madan is your delivery boy!");
});
//? by anonymous function
orderFood(function (){
    console.log("Suresh is your delivery boy!")
});

//!HOF(Higher Order Function)
//* A function which will accept another function as a argument is called as HOF. OR
//* A function which will return another function is called as HOF.
//?HOF
function calculate(n1, n2, operation){
    return operation(n1, n2);
}
//?callback function
function add(n1, n2){
    return n1 + n2;
}

console.log(calculate(10, 20, add));

//!Nested Function
//* The function which is present inside another fuction is known as nested function.

function outer(){
    console.log("This is outer functon!");
    function inner(){
        console.log("This is inner function!");
    }
    inner();
}
outer();

//!Closure Function
//* If you are trying to access the outer function variables or data inside the inner function that time it will create the closure by the outer function.
//? here, closure means remembering the value of outer function inside the inner function.

function outer1(){
    let outervar = 10;
    console.log("This is outer functon!");
    function inner(){
        console.log(outervar);
        console.log("This is inner function!");
    }
    inner();
}
outer1();

//! Generator Function
//* The Generator function is special type of function which will pause and resume its execution.
//syntax:- function*
//? yield keyword is used to pause the execution
//? .next() is used to resume the execution and again pause it.

function* netflix(){
    yield "Episode1";
    yield "Episode2";
    yield "Episode3";
}
console.log(netflix().next());
console.log(netflix().next().value);
console.log(netflix().next().done);

let remembering = console.log(netflix().next());
console.log(remembering.next());
console.log(remembering.next());
console.log(remembering.next());

