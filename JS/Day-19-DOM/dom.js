//!What is DOM?(Document Object Model)
//*DOM stands for Document Object Model.
//* DOM is an API which allows us to access the html elements inside the js to provide functionalities
//* The hierarchical representaion of a html structure in the form nodes.
//?OR
//* The inverted tree-like structure of a html document is called as DOM.

//! Why do we need DOM?
//* DOM is a bridge btw the html document and js logic.
//* Without DOM we cannot manipulate (create,modify or remove) the html structure.

//! How to create a DOM?
//* When a browser load HTML document.
//* 1. It reads a HTML Structure.
//* 2. It will convert the HTML elements into the tree-like structure.
//* 3. This tree is called as DOM.

//?That means JS can't talk directly to the html structure instead of it will talk to the DOM.

//?Types of DOM:
//~ 1. core DOM -> all type of document
//~ 2. HTML DOM -> only for html doc
//~ 3. XML DOM -> only for xml doc
//~ 4. react DOM -> virtual dom

//! What is Node?
//* A node is a basic building block in JS.
//* OR A node is a piece of item in js which will represent different type of items is called as node.

//?Types of Nodes:
//~ 1. document node-> top-most node
//~ 2. element node-> h1, p, div, img, etc. all html elements.
//~ 3. attribute node-> id, class, src, href, etc..
//~ 4. Comment Node-> Comment inside html
//~ 5. leaf node -> The node present at the end of the hierarchy is called as Leaf node.
//~ 6. text node-> Text node represent the context or text inside the html elements.
//~ 7. DocumentFragment node.

//! What is Document?
//* Document is a global object provided by the browser.
//* Here document represents the HTML structure.

//? Document properties: (Direct Access Properties)
//* Syntax: document.propertyName
console.log(document);


//~ 1. document.title
console.log(document.title);
document.title = "Updated Title"
console.log(document.title);

//~ 2. document.head
console.log(document.head);

//~ 3. document.body
console.log(document.body);

//~ 4. document.URL
console.log(document.URL);

//~ 5. document.all
console.log(document.all); //HTML collection

//! Indirect Access of HTML elements:
//* Indirect access means accessing the HTML elements by taking reference of an another elements.
let list = document.getElementById("list");
console.log(list);// 1st list

//~ 1. parentElement:
console.log(list.parentElement);//ul
console.log(list.parentNode);//ul
console.log(list.parentElement.parentElement);

//~ 2. nextElementSibling:
console.log(list.nextElementSibling);

//~ 3. childNodes:
//* The childNodes returns all type of nodes (element, text, comment, whitespace considered as text node, etc)
let box = document.getElementById("box");
console.log(box.childNodes);// NodeList(7) [text, h1, text, p, text, span, text]


//~ 4. children:
//* The children returns only html nodes (HTML elements only).
//* It ignores the text, attribute and comment node.
console.log(box.children);// HTML collection(3) [h1, p, span]


