//! Adding Dynamic Attributes:

//~ 1. By using Direct way:
// .className
// .id

let allparas = document.querySelectorAll("p");
console.log(allparas);

allparas.forEach((pEle, index) => {
    pEle.className = "para";
    if (index === 1){
        pEle.id = "SecondPara";
    }
});

//~ 2. By using inbuilt methods:
//getAttribute("attribute-name");
//setAttribute("attribute-name","attribute-vale")

//get
let image = document.querySelector("img");
console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));

//set
let link = document.querySelector("a");
link.setAttribute("href","https://www.google.com/")
link.setAttribute("target","_blank");

//OR element.attributename = "value";
link.href = "https://www.google.com/";
link.target ="_blank";