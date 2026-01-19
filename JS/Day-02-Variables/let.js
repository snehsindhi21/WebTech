console.log("let variable in JS")


//!2. let:
//* The let variable is introduced in ES6 concepts which was released in year 2015.
//* The scope of let variable is block scope.

//~ 1. Declaration (D) : Possible ✅
let num;
console.log(num);//undefined

//& 2. Intiailzation (I) : Possible ✅
num = 10;
console.log(num);


//todo:  3. D + I : Possible ✅
let num2 = 20;
console.log(num2);


//? 4. R - D : Not Possible ❌
// let num;
// Error : Cannot redeclare block-scoped variable 'num'.


//? 5. R-I : Possible ✅
num = 50;
console.log(num);