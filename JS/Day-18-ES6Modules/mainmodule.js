import sum, { name } from './add.js';//default import
import {age} from './add.js';//named import


//~ 7.Modules:
//! What is Module?
//* A module is a separate file.
//* Modules are allows us to divide the js code into separate files for easy readablility and organizability.


//? Two types of Modules in JS:
//* 1. ES6 Modules (import & export)
//* 2. CommonJS Modules (require() & module.exports()) -> node.js

//! Use the logic in main file
sum(10,20); //30
console.log(sum);
console.log(name); //Sneh
console.log(age); //10