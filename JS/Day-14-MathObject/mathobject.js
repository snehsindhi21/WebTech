console.log("Math Object");

//!Math Object:
//* The math object is used to perform mathematical operations such as generating random numbers, rounding off numbers, trignometric functions etc.
//* Without creating math object we can access its properties and methods directly using Math Keyword.

//!Math Object Properties:
//~ 1. Math.PI:
console.log(Math.PI);//3.14
//~ 2. Math.E:
console.log(Math.E);//2.71

//! Math Functions:
//~ 1. Math.round():
console.log(Math.round(5.4));//5

//~ 2. Math.floor():
console.log(Math.floor(5.9));//5

//~ 3. Math.ceil():
console.log(Math.ceil(5.1));//6

//~ 4. Math.sqrt():
console.log(Math.sqrt(25));//5

//~ 5. Math.cbrt():
console.log(Math.cbrt(27));//3

//~ 6. Math.pow();
console.log(Math.pow(2,3));//8

//~ 7. Math.min();
console.log(Math.min(10,5,20,3,15));//3

//~ 8. Math.max();
console.log(Math.max(10,5,20,3,15));//20

//~ 9. Math.trunc();
//will remove only decimal value
console.log(Math.trunc(5.9));//5

//~ 10. Math.abs();
console.log(Math.abs(-10));//10

//~ 11. Math.random();
//will generate random number between 0(included) to 1(exluded)
console.log(Math.random());//0.0 to 0.9999999

//! Generate 4 digit OTP
Math.random();
let otp = Math.floor(Math.random() * 9000) + 1000;
console.log(otp);

//! User Input : promt()
let userInput = prompt("Enter a number between 1 to 10:");
console.log(Number(userInput));

//! Lucky Number Game
let luckyNumber = Math.floor(Math.random() * 10) + 1;
if(Number(userInput) === luckyNumber){
    console.log("Congratulations! You have won the game.");
}else{
    console.log(`Sorry! Your lucky number is ${luckyNumber}. Try Again!`);
}