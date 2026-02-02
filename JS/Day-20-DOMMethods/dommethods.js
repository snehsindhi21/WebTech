//!DOM Direct Access Properties:
//~ 1. document.images
console.log(document.images);//HTMLCollection(2) [img,img]

//~ 2. document.forms
console.log(document.forms);

//~ 3. document.links
console.log(document.links);

//~ 4. document.styleSheets
console.log(document.styleSheets);

//~ 5. document.scripts
console.log(document.scripts);

//! DOM Methods:
//~ 1. document.getElementById("id")
//* The document.getElementById() method is used to access the html element by their specific id
//& returntype: html element or null
let heading = document.getElementById("head");
console.log(heading);

//! style attribute:
heading.style.color ="red";
heading.style.backgroundColor = "yellow";


//~ 2. document.getElementByClassName("class")
//* The document.getElementByClassName() is used to access the multiple html elements by their specific class name.
//& Return type: HTMLCollection

//! HTMLCollection:
//* The collection or group of html elements only is called as html collection.
//* It will look like an array but it is not an acutal or true array.

let paras = document.getElementsByClassName("para");
console.log(paras);// HTMLCollection(3)[p.para, p.para, p.para]

// para.style.border = "2px solid blue";
console.log(Array.isArray(paras));//false

//! Converting the HTMLCollection into an Array:
//! 1. Array.form()
let convertedHTMLCollection = Array.form(paras);
console.log(convertedHTMLCollection);
console.log(Array.isArray(convertedHTMLCollection));//true

convertedHTMLCollection.forEach((para, index)=>{
    // if (index== 1) {
    //     para.style.border= "2px solid blue";
    // }
    para.style.border ="2px solid blue";
})


//! 2. By using Spread Operator: ...varName
let htmlToArrayBySpread = [...paras];
console.log(htmlToArrayBySpread);

htmlToArrayBySpread.forEach((para)=>{
    para.style.color = "teal";
});

//~ 3. document.getElementByTagName("h1")
//~ 4. document.getElementByName("name-attribute")->forms
//~ 5. document.querySelector("#head")or(".para")or("h1")-> single element
//~ 6. document.querySelectorAll()->multiple elemnent
