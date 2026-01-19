console.log("const variable in JS")


//! 3. const :
//& Here const stands for constant value.
//& The const varible is introduced in ES6 concepts which was released in 2015.
//& The const varibale has a default scope is block.

//~ 1. Declaration (D) : Not Possible 👎
// const num;
// Error : 'const' declarations must be initialized.


///? 2. Intiailzation (I) : Not Possible 👎
// num = 10;// var num = 10;


// 3. D + I : Possible 👍
const num = 10;
console.log(num);


//& 4. R - D : Not Possible 👎
// const num;
// Error :'const' declarations must be initialized.
// Error : Cannot redeclare block-scoped variable 'num'.


//^ 5. R-I : Not Possible 👎
num = 50;
console.log(num); // Assignment to constant variable.