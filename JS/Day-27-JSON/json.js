console.log("JSON");
//! JSON:
//* JSON stands for javascript object notation
//* It is light-weight format for structuring the data.

///* Whenever you want to send the data Browser(client/app) to Server, data must be in String format.

//* Whenever you want to access the data from server to Browser(client/app), data must be in js object format.

//! JSON will provide 2 Methods
//~ 1. JSON.parse():
//* The JSON.parse() will convert the JSON string into the js object.
//? Syntax: JSON.parse(jsonString)

let jsonString ='{"name":"jhon","age":20,"status":true}';
console.log(jsonString);
console.log(JSON.parse(jsonString));


//~ 2. JSON.stringify():
//* The JSON.stringify() will convert the js object into the JSON string.
//? Syntax: JSON.stringify(jsobject)

let employee ={
    eName:"jhon",
    eSalary:"30000",
    eAge:20
};
console.log(JSON.stringify(employee));

//! What is collection?
//* A Collection is a group of multiple documents.
//* It is represented by -[]

//! What is document?
//* A document is collectioon of key-value pair/field.
//* It is represented by- {}