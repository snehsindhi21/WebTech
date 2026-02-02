console.log("ES6 Concepts");

//! ES6 Concepts:
//* ECMA Script-6->2015->Major update

//~ 1. let and const Keyword in JS:
//~ 2. Arrow Function (Fat- Arrow Function)
//~ 3. Symbol() ->Primitive DateType
//~ 4. Function with Default Parameters
//* The parameter which is passed inside the function defination with default value is called as function with default parameters.
function greet(name = "Guest"){
    console.log(`Hello ${name}`);
}
greet(Dhruv); //Hello Dhruv
greet(); //Hello Guest

//~ 5. Destructuring
//* Destructuring means divide or breaking big-structure into smaller values (variables) for easy use or access.
//* we can perform destructuring for array and object.

//? 1. Array Destructuring:
let mixedArray = [10, "Sneh", true, null, {name: "Sneh", age: 21}, function(){console.log("This is function");},[20,30,40]];
//! Taditional way to acces the array elements:
console.log(mixedArray[0]);

//!Destructuring the array:
let [a,b,c,d,e,f,g] = mixedArray;
console.log(a); //10
console.log(g);//[20,30,40]

//! Again destructing 
let [x,y,z]=g;
console.log(x); //20

f(); //This is function

console.log(e);//{name: "Sneh", age: 21}
console.log(e.name);//Sneh


//? 2. Object Destructuring:
//^ImpNote- when you are destructuring the object, you must use the same keyName of an object inside the destructuring.
let employee = {
    empId: 101,
    empName: "Sneh",
    empAge: 21,
    empSkills: ["HTML", "CSS", "JS", "ReactJS"],
    empAddress: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India"
    },
    empManager: {
        empId: 201,
    }
};
//! Destructuring the object:
let {empId, empName, empAge, empSkills, empAddress, empManager} = employee;
console.log(empId); //101
console.log(empSkills); //["HTML", "CSS", "JS", "ReactJS"]
let [p,q,r,s] = empSkills;
console.log(r); //JS

//!again Destructuring
let {city, state, country} = empAddress;
console.log(city); //Ahmedabad

let {empId: managerId} = empManager; //using aliasing empId as managerId
console.log(managerId); //201

//~ 6. Spread Operator & Rest Operator
//* Spread operator it is used to spread or unpack the values of array or object or Function.
//? Syntax: ...variableName
//! Spread Operator with Array:
let colors = ["Red", "Green", "Blue"];
let moreColors = ["Yellow", "Purple", "Orange"];
let allColors = [...colors, ...moreColors];
console.log(allColors); //["Red", "Green", "Blue", "Yellow", "Purple", "Orange"]

//! Spread Operator with Object:
let person = {
    name: "Sneh",
    age: 21,
};
let contactDetails = {...person,
    email: "sneh@gmail.com"
};
console.log(contactDetails); //{name: "Sneh", age: 21, email: "sneh@gmail.com"}

//! Spread Operator with Function:
function getNumbers(...numbers){
    //Here, ...numbers  
}
//! Rest Parameter in array:
//* It is used to collect remaining values.
//? Syntax: ...variableName

//~ 7. Modules
//~ 8. Promises
//~ 9. async and await
//~ 10. class
//~ 11. String Template Literal (Backtick-``)