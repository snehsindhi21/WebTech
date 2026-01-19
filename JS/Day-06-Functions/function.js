console.log("Types of Functions.")

//! Types of Functions : 
//~ Basic Functions
//? 1. Naming Function 
//? 2. Anonymous Function
//? 3. Function as an Expression
//? 4. IIFE (Immediate Invoking Function Expression)
//? 5. Arrow Function (Fat Arrow Function)
//? 6. Callback Function
//? 7. HOF (Higher-Order Function)
//~ Advanced Functions
//? 8. Nested Function
//? 9. CLosure Function
//? 10. Generator Function
//? 11. Function Currying

//! 1. Named Function : 
//* The function which is defined with identifier is called Named Funciton.
//* In simple words the function which has a name is called Named Function.

function faltuKaGhyan() {
    console.log("Work like a madness and achieve like a greatness!")
}
faltuKaGhyan();

//! 2. Anonymous Function :
//* The function which don't have any name us called as Anonymous Function.

//! 1st way :
//? Store the anonymous function inside a variable and call that variable with empy ().
let mrHashmi =  function () {
    console.log("Mr.X")
};
console.log(mrHashmi);
mrHashmi();

//! 3. Function as an expression :
//* The function which is assigined to a variable as a expression is called as Function as an Expression.

//! 2nd Way to Call Anonymous Function :
//? Wrap the entire anonymous function inside the empty() and call the empty() inside the outer () or just after the function block.
(function () {
    console.log("This is Anonymous Function");
}());

//! arguments object :
//* The arguments object is used to store all the values which is passed inside the FCS as a actual values.

function getNumbers() {
    // console.log(num1);
    console.log(arguments);
    let argumentsObject = arguments;
    console.log(Array.isArray(argumentsObject)); // false
    console.log(arguments[0]);

    console.log(typeof arguments); // object
}
getNumbers(10,20,30,40);

//! 4. IIFE : 
//* The IIFE stands for Immediate Invoking Function Expression.
//* The IIFE function executes only once.

// Syntax :   
// (function () {
//     alert("Hello!");
// })();

//! 5. Arrow Function (Fat Arrow Function) :
//* The arrow function is shorthand syntax to create fucntion in JS.
//* Arrow Function is introduced in ES6 concepts which was released in 2015.

//? Syntax : () => {}

let add = (num1, num2) => {
    console.log(num1 + num2);
    return num1+num2;
}
console.log(add);
add(10,20); // 30                                                                                                           
console.log(add(60,20)); // 80, 80