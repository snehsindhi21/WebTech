import getAllProducts, { getProductById } from "./product.js";
console.log(getAllProducts());

//! Accessing the product by their id
let smartphone = getProductById(6);
console.log(smartphone);

//! Accessing the add 