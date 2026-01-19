console.log("Operators in JS");

//! What is Operators?
//*

//~ Arithmetic
//~ Comparison
//~ Logical
//~ String Concentenation
//~ Ternary
//~ Nullish Coalescing
//~ Assignment

//!What is difference between == and === ?
let num1=10;
let num2="10";

//*Here it checks only value not datatype
console.log(num1==num2);//true

//*Here it checks both value and datatype
console.log(num1===num2);// false

//! String Concentaton  operator(+)
let firstname= "Sneh";
let secondname= "Sindhi";
console.log(firstname+secondname);

//!Ternery Operator
//if(condition){

//}else{

//}
//*Syntax:- condition?statement1 : statement2;
//*if condtion true then statement1 else statement2.
let statuscode=200;
let result = statuscode===200?"OK" : "Not OK";
console.log(result);


//! Nullish Operator(??)
//*The Nullish Operator is used to provide the default value only when the value is null or undefined.
//*If the value is valid value then default value will not be executed.
//*Syntax:- value ?? default_value;
let age = 10;
let userage = age ?? 20;
console.log(userage);//10

let age1 = null;
let userage1 = age1 ?? 20;
console.log(userage1);//20

let age2 = undefined;
let userage2 = age2 ?? 20;
console.log(userage2);//20

let age3 = 0;
let userage3 = age3 ?? 20;
console.log(userage3);//0

let age4 = false;
let userage4 = age4 ?? 20;
console.log(userage4);//false