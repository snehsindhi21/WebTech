console.log("String in JS");

//! String:
//* String is the collection of characters.
//* String is immutable in nature.

//? How many ways we can create the string:
//* 1. By using single quotes ('')
//* 2. By using double quotes ("")
//* 3. By using String Template Literal (Backticks) (``)

//! We can create a string with the help of String() constructor:

let strObject = new String("Hello");
console.log(strObject);
console.log(typeof strObject);

//! String Properties: length
//* The length property it is used to count the characters present inside the given string.
//? Return Type: number

let str1 = "Hello World!";
console.log(str1.length); // 12

//! String Methods:

//! 1. charAt():
//* Returns the character at the specified index.
//? Syntax: str.charAt()
//? Return Type: Character
let str2 = "JavaScript";
console.log(str2.charAt(4)); // S
console.log(str2.charAt(3)); // a

//! 2. indexOf():
//*Returns the position of the first occurrence of a substring.
//? Syntax:
//? Return Type:
console.log(str2.indexOf("va"));

//! 3. includes():
//*Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
//? Syntax:
//? Return Type:
console.log(str2.includes("script")); // true

//! 4. slice():
//* Returns a section of a string.
//?syntax:
//? Return Type:
console.log(str2.slice(-1,-5));

//! 5. substring():
//* Returns the substring at the specified location within a String object.
//?syntax:
//? Return Type:
console.log(str2.substring(1,5));

//! 6. trim():
//* Removes the leading and trailing white space and line terminator characters from a string.
//?syntax:
//? Return Type:
console.log(str2.trim());

//! 7. trimStart():
//* Removes the leading white space and line terminator characters from a string.
//?syntax:
//? Return Type:
console.log(str2.trimStart());

//! 8. trimEnd():
//* Removes the trailing white space and line terminator characters from a string.
//?syntax:
//? Return Type:
console.log(str2.trimEnd());

//! 9. lastIndexOf():
//* Returns the last occurrence of a substring in the string.
//?syntax:
//? Return Type:
console.log(str2.lastIndexOf());

//! 10. split():
//* Split a string into substrings using the specified separator and return them as an array.
//?syntax:
//? Return Type:
console.log(str2.split());

//! 11. toUpperCase():
//* Converts all the alphabetic characters in a string to uppercase.
//?syntax:
//? Return Type:
console.log(str2.toUpperCase());

//! 12. toLowerCase():
//* Converts all the alphabetic characters in a string to lowercase.
//?syntax:
//? Return Type:
console.log(str2.toLowerCase());

//! 13. concat():
//* Returns a string that contains the concatenation of two or more strings.
//?syntax:
//? Return Type:
console.log(str2.concat());

//! 14. padStart():
//* Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
//?syntax:
//? Return Type:
console.log(str2.padStart());

//! 15. padEnd():
//* Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
//?syntax:
//? Return Type:
console.log(str2.padEnd());

//! 16. startsWith():
//* Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
//?syntax:
//? Return Type:
console.log(str2.startsWith());

//! 17. endsWith():
//* Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
//?syntax:
//? Return Type:
console.log(str2.endsWith());

//! 18. replace():
//* Replaces text in a string, using a regular expression or search string.
//?syntax:
//? Return Type:
console.log(str2.replace());

//! 19. replaceAll():
//* Replace all instances of a substring in a string, using a regular expression or search string.
//?syntax:
//? Return Type:
console.log(str2.replaceAll(Java,java));

//! 20. repeat():
//* Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
//?syntax:
//? Return Type:
console.log(str2.repeat(5));


//!Create a function getFileExtension that returns the file extention
//!input: Resume.pdf  output:.pdf
//*
function getFileExtension(str){
    let i = str.lastIndexOf(".");
    let extension = str.slice(i);
    return extension;
}
getFileExtension("Resume.pdf");


//!Create a function getFileName that returns the filename without extention
//!input: Resume.pdf  output: Resume
//*
function getFileName(str){
    let i = str.lastIndexOf(".");
    let name = str.slice(0,i);
    return name;
}
getFileName("Resume.pdf");

//!Create a function countCharacters to count total characters
//*
function countCharacters(str){
    let i = str.length;
    return i;
}
countCharacters("Resume.pdf");

//!Create a function getUserNameFromEmail 
//!input: john@gmail.com  output:john
//*
function getUserNameFromEmail(str){
    let i = str.lastIndexOf("@");
    let name = str.slice(0,i);
    return name;
}
getUserNameFromEmail("john@gmail.com");

//!Create a function maskEmail
//!input: john@gmail.com  output:jo**@gmail.com
function maskEmail(str){
    let i = str.lastIndexOf("@");
    let name = str.slice(0,i);
    let newname = name.padStart(2,"*");
    let mask = newname.concat(str.slice(i));
    return mask;
}
maskEmail("john@gmail.com");