console.log("Call, Apply, Bind Method in JS");

//! Why do we need call(), apply(), bind() method in js?
//*Bassically call(), apply(), bind() methods are used to borrow the logic of external function.
//* It is used to manipulate the behaviour of 'this' keyword in js.


//! call() in JS:
//* The call() method is used to borrow the logic of function and pass the dynamic object.
//* The call() is immediately invoked or call the function with respect to the object.

let person1 ={
    username: "Sneh"
};
let person2 ={
    username : "John"
};
function greet(){
    console.log(`Hello ${this.username}`);
}
//?Syntax: functionName.call(thisArg)
//? And Here thisArg-> Replace with Actual Object
greet.call(person1); //Hello Sneh
greet.call(person2); //Hello John

//! apply() in JS:
//* The apply() method is works same as call() method, but it will accept the multiple arguments in the form of array.
//* The apply() method is used to borrow the logic of function and pass the dynamic object.
//* The apply() is immediately invoked or call the function with respect to the object.
//?Syntax: functionName.apply(thisArg, [args1, args2,...])

function greetWithMessage(message){
    console.log(`${message} ${this.username}`);
}
greetWithMessage.apply(person1, ["Good Morning"]); //Good Morning Sneh
greetWithMessage.apply(person2, ["Good Evening"]); //Good Evening John

//! bind() in JS:
//* The bind() method is used to handle the 'this' keyword behaviour but it will not invoked or called immediately instead of it will return the function.
//?Syntax: methodName.bind(thisArg);

let userInfo = greetWithMessage.bind(person1);
userInfo("Good Morning"); //Good Morning Sneh
let userInfo2 = greetWithMessage.bind(person2);
userInfo2("Good Evening"); //Good Evening John9+6