console.log("BOM in JS");

//! BOM:
//* BOM stands for Browser Object Model
//* BOM it is used to interact with the browser screen/window

//? What is window?
//* window is the global object provided by the each and every browser.
//*window will provide some set of properties and methods in JS.

console.log(window);// global object
// syntax: window.propertyName
//& Properties of window object
//~ 1. document
console.log(window.document);

//~ 2. screen
console.log(window.screen);
console.log(screen);
console.log(screen.orientation);

//~ 3. navigator
//* The navigator tells the information about your browser
console.log(navigator);
console.log(navigator.platform);
console.log(navigator.deviceMemory);

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(`Latitude:${position.coords.latitude.toFixed(4)}`);
     console.log(`Longitude:${position.coords.longitude.toFixed(4)}`);  
});

let statusText = document.getElementById("statusText");

if (navigator.onLine) {
    statusText.innerHTML = "You are Online😊";
    statusText.style.color = "green";
} else {
    statusText.innerHTML = "You are Offline😞";
    statusText.style.color = "red";
}

//~ 4. history
// history.forward()-> to forward
// history.back()-> to backward
// history.go()-> it accept positive as well as negative integer based on that it will redirect

//~ 5. console
//* console is a object provided by the window which is used to print the output in the console of the browser. (BDT)

console.log(console);
console.warn("This is warning");
console.error("Something went wrong!");

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.table(arr);
console.dir(document);
// console.dir(Array);


//~ 6. location
//* location will give you the information about the url.

console.log(location);
console.log(location.port);

document.getElementById("btn").addEventListener("click", () => {
  location.reload();
  //   location.href = "https://www.google.com/";
  location.assign("https://www.google.com/");
});

//! Methods:

//? 1. alert():
// alert("Alert is used")

//? 2. confirm():
// let userInput = confirm("Are you sure want to delete your account?");
// console.log(userInput);

//? 3. prompt():
// let userInput = Number(prompt("Enter your age?"));
// console.log(userInput);
// console.log(typeof userInput);

//? 4. open():
open("https://www.google.com/");

//? 5. close():
//close()
