console.log("Events in JS");

//!Even:
//* Event is an object in JS.
//* The change in a state of an object is called as Event.
//* Whenever event will trigger, one function will be invoked or called.

function notify() {
    alert("Button is clicked!");
}

//! What is addEventListener()?
//* The addEventListner() method is used to add or attaches the event in javascript.

//? Syntax: addEventListner(event_type, callback_function)

let btn = document.getElementById("btn1");
console.log(btn);

//! 1st way:
// btn.addEventListener("click",function(){
//     alert("Hello How are you?");
// });

//! 2nd way:
// btn.addEventListener("click", () =>{
//     alert("Hello How are you?")
// });

//!3rd way:
function greet(){
    alert("Hello How are you?");
}

btn.addEventListener("click", greet);

//! what is e?
//* e stands for event in callback function.
//* e consists of properties of an event triggered by the user.

let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener("click", (e) =>{
        // console.log(e);
        console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value;             
    });
});

//! 2. Form Event:
//? How to access the value from an input field?

let loginForm = document.getElementById("login-form");
console.log(loginForm);

//! e.preventDefault():
//* The e.preventDefault() method prevents the default behaviour of an html element such as reloading page, scrolling page, at the time navigating page reloading, etc.

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    //console.log(e);
    let username = document.getElementById("username");
    console.log(username.value);
    
}); 


//! Difference between change and input:

let username = document.getElementById("username");
let country = document.getElementById("country");

username.addEventListener("input", (e) => {
  document.getElementById("output").innerText = username.value;
});

country.addEventListener("change", (e) => {
  document.getElementById("output2").innerText = country.value;
});