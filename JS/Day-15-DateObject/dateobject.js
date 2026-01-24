console.log("Date Object");
//* Date is a inbuilt object in js which is used to handle and manipulate date and time.
//* Without creating date object we can access its properties and methods directly using Date Keyword.
//?Syntax to create date object:
let currentDate = new Date();
console.log(currentDate);

//! Date Object Methods:
//~ 1. getFullYear():
console.log(currentDate.getFullYear());//2024

//~ 2. getDay():
console.log(currentDate.getDay());//0 (Sunday)

//~ 3. getDate():
console.log(currentDate.getDate());//16

//~ 4. getMonth():
console.log(currentDate.getMonth());//5 (June, month starts from 0 to 11)

//~ 5. getHours():
console.log(currentDate.getHours());//14 (2 PM)

//~ 6. getMinutes():
console.log(currentDate.getMinutes());//30

//~ 7. getSeconds():
console.log(currentDate.getSeconds());//45

//~ 8. getMilliseconds():
console.log(currentDate.getMilliseconds());//123

//!Formatting Date and Time
let date = new Date();
console.log(date);

let Date = date.getDate();
let Month = String(date.getMonth() + 1).padStart(2,"0"); // Months are zero-based
//console.log(typeof Month);
let Year = date.getFullYear();

let FormattedDate = `${Date}-${Month}-${Year}`;
console.log(FormattedDate); // e.g., "16-06-2024"

//! Date Set Methods:

//~ 1. setFullYear():
date.setFullYear(2025);
console.log(date.getFullYear());//2025

//~ 2. setMonth():
date.setMonth(11); // December

//~ 3. setDate():
date.setDate(25); // 25th

//! Sortcut:
let newDate = new Date(2023, 0, 1); // January 1, 2023
console.log(newDate);