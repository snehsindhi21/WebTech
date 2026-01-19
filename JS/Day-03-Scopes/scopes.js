console.log("Scopes in JS");

//! What is Scope?
//* Scope is nothing but the visibility or accessibility of variables in certain part of the code.
//* There are 5 types of scopes in js:
//~1. Global Scope
//~2. Block Scope
//~3. Local or Function Scope
//~4. Module Scope
//~5. Script Scope

//! 1. Global Scope:
//* The Scope is a accessiblity or visibility of variable in entire code.--> var is by default global scope
    var num = 10; 
    console.log("num:",num);
//! 2. Block Scope:
//* The variables which is declared with let and const has always block scope. --> let , const can only be accessed inside the block. Note: var is accessible outside the block also.
//* Block--> 
    {
        let num1 = 20;
        const num2 = 30;
        console.log("num1:",num1);
        console.log("num2:",num2);
    }   

//! 3. Local or Function Scope:
//* The variable which is declared with var, let, const are always local to the function. -->var, let , const Note: no one is accessible outside the function.
function localFunc(){
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
}
localFunc();

//! 4. Module Scope:
//*

//! 5. Script Scope:
//*   --> let , const are script scope when declared outside any function or block. Note: var is not script scope
let x= 100;
const y = 200;
console.log("x:",x);
console.log("y:",y);



//? Debugger is a keyword which is used to automatically enable debugging the code line by line.