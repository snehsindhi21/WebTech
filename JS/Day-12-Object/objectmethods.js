const smartBulb = {
    brand : "Phillips",
    brightness : 80,
}
//! Object Static Methods
//~ 1. Object.keys()
//* It will return all the  keys of an object in the form of array.
console.log(Object.keys(smartBulb));

//~ 2. Object.values()
//* It will return all the values of an object in the form of array.
console.log(Object.values(smartBulb));

//~ 3. Object.assign()
//? Syntax: Object.assign(target_obj, new_obj);
//* It is used to create a new object.
let newalyCreatedObj = Object.assign({},{name:"John", age:20});
console.log(newalyCreatedObj);

//* It is used to merge two different objects.
let obj1 = {name:"John"};
let obj2 = {age:20};
let mergeObj = Object.assign(obj1,obj2);
console.log(mergeObj);

//~ 4. Object.entries()
//* It will return a nested array with each key value pair in the form of array.
console.log(Object.entries(smartBulb));
// (3) [["brand",phillips],....] 

//~ 5. Object.fromEntries()
//* It is used to create an object using entries which is in form of key value pair array.
let entries = [['name','John'],['age',20]];
let objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);

//~ 6. Object.seal()
//~ 7. Object.isSealed()
//~ 8. Object.freeze()
//~ 9. Object.isFrozen()
//~ 10. Object.hasOwn()