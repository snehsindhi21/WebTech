console.log("DOM Manipulation Methods");

//! DOM Manipulation Methods:
//* DOM Manipulation Methods are allows us to create, remove and change or modify the HTML elements inside the JS.
//* Basically we will create the HTML elements dynamically inside the JS itself instead of writing in HTML document.

//~ 1. createElement()
//~ 2. appendChild()
//~ 3. removeChild()

//?syntax = parentElement.method(element);
//! creating the HTML element
let para = document.createElement("p");
console.log(para);

//! How to add attributes to created element
para.className = "para";
para.id = "para1";

console.log(para);

para.innerText = "The paragraph is createf dynamically with the help of createElement()";

document.getElementById("btn").addEventListener("click", ()=>{
    document.getElementById("container").appendChild(para);
    para.style.color ="red";
});

document.getElementById("remove-btn").addEventListener("click", ()=>{
    document.getElementById("container").removeChild(para);
});