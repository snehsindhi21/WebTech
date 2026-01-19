console.log("Object in JS");

//! what is object?
//* An object is a programmatical representation of real-world entities.
//* An object is a colllection of multiple different key-value pairs.
//* If you print(console.log) the object, object may not appear in a same order as you defined it.

//! properties-> A property is a collection of key-value pair.
//? property = key + value

//! How to create an object?
//? 1. By using object constructor
//? 2. By using object literal

//! 1. By using object constructor
let person1 = new Object();
person1.name="Raj";
person1.age=25;
person1.city="Mumbai";
console.log(person1);

//! 2. By using object literal
let person2 = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person2);

//! How to access properties of an object?
console.log(person2.name); // Dot notation
console.log(person2["age"]); // Bracket notation
console.log(person2.gender);// undefined


//! How to add properties to an existing object?
person2.country = "USA";
console.log(person2);

//! How to delete properties from an existing object?
delete person2.city;
console.log(person2);

//! How to update properties of an existing object?
person2.age = 31;
console.log(person2);

//! How to access the array elements in an object?
let student = {
    name: "Alice",
    age: 22,
    subjects: ["Math", "Science", "History"]
};
console.log(student.subjects[1]); // Accessing "Science"

//! What is methods in Object?
//* A simple javascript function which is stored inside in key of an object is called as method of an object.
let laptop ={
    brand: "Lenovo",
    model: "LOQ16",
    Gaming:function(){
        console.log("This laptop is good for gaming");
    }
};
console.log(laptop);
laptop.Gaming(); // Calling the method of an object

