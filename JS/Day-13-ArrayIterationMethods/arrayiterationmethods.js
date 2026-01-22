//! Array Iteration Methods
//* Array iteration methods are also known as advanced array methods for morden js as well as React js.
//* Array iteration methods are used to loop through automatically on an array and perform some operation for each and every element of the array.

//~ 1. map()
//? Syntax: array.map(callback_function);
//* The map() method is used to iterate over an array and it transform each and every element present inside the array.
//* It will create a new array instead of modifing orignal array.
//array.map(currentValue, currentIndex, currentArray);
// Return Type: New Transformed Array
let numbers = [1,2,3,4,5];
let sqrNumbers = numbers.map((cValue, cIndex, cArray)=>{
    //console.log(cValue);
    //console.log(cIndex);
    //console.log(cArray);
    //console.log(cValue * cValue);
    return cValue * cValue;
});
console.log(sqrNumbers); // (5) [1,4,9,16,25]
console.log(numbers);// (5) [1,2,3,4,5] - Orignal Array remains same

let heros = ["Ironman","Spiderman","Thor","Hulk"];
heros.map((hero, index)=>{
    console.log(index);
});

//!thisArgument
let obj = {
    value : 10,
}
let newNumbers = numbers.map(function(num){
    return num + this.value;
},obj); // here obj is thisArgument
console.log(newNumbers);// (5) [11,12,13,14,15]


//~ 2. filter()
//? Syntax: array.filter(callback_function);
//* The filter() method is used to filter out elements from an array based on some condition.
//* It will create a new array instead of modifing orignal array.
//array.filter((currentValue, currentIndex, currentArray) => {});
//Return Type: New Filtered Array
// if condition is true then that element will be added to new array otherwise not.
let mixedNumbers = [10,15,20,25,30,35,40,45,50];
let evenNumbers = mixedNumbers.filter((cValue, cIndex, cArray)=>{
    return cValue % 2 === 0; // condition
});
console.log(evenNumbers); // (5) [10,20,30,40]
console.log(mixedNumbers); // (9) [10,15,20,25,30,35,40,45,50] - Orignal Array remains same

//!RealTime Example
let products = [
  {
    name: "Himalaya Herbals Purifying Neem Face Wash",
    price: 180.0,
    category: "Personal Care",
  },
  {
    name: "Mamaearth Onion Hair Oil",
    price: 399.0,
    category: "Personal Care",
  },
  {
    name: "Saffola Gold Blended Edible Oil (5L)",
    price: 680.0,
    category: "Groceries",
  },
  {
    name: "Amul Butter (500g)",
    price: 260.0,
    category: "Groceries",
  },
  {
    name: "Prestige Svachh Pressure Cooker (3L)",
    price: 1350.0,
    category: "Home Appliances",
  },
  {
    name: "Bajaj Pulsar 150 Motorcycle",
    price: 110000.0,
    category: "Vehicles",
  },
  {
    name: "Tata Salt (1kg)",
    price: 30.0,
    category: "Groceries",
  },
  {
    name: "Fastrack Analogue Watch (Men's)",
    price: 2500.0,
    category: "Accessories",
  },
  {
    name: "Mi Super Bass Wireless Headphones",
    price: 1799.0,
    category: "Electronics",
  },
  {
    name: "Patanjali Dant Kanti Toothpaste",
    price: 90.0,
    category: "Personal Care",
  },
];
let groceryProducts = products.filter((product)=>{
    return product.category === "Groceries";
});
console.log(groceryProducts);
/* [
  { name: 'Saffola Gold Blended Edible Oil (5L)', price: 680, category: 'Groceries' },
  { name: 'Amul Butter (500g)', price: 260, category: 'Groceries' },
  { name: 'Tata Salt (1kg)', price: 30, category: 'Groceries' }
] */
//! Difference between map() and filter()
// map() - it transforms each and every element of the array and returns a new array of same length as orignal array.
// filter() - it filters out elements based on some condition and returns a new array which may or may not be of same length as orignal array.
mixedNumbers.map((num)=>{
  if (num % 2 ==0){
    return num;
  }
  else {
    return odd;
  }
})//  [10, odd, 20, odd, 30, odd, 40, odd, 50] 
mixedNumbers.filter((num)=>{
  return num % 2 ==0;
})// [10,20,30,40,50]


//~ 3. reduce()
//? Syntax: array.reduce(callback_function, initialValue);
//*
//* The reduce() method is used to reduce the array to a single value by performing some operation on each and every element of the array.
//* It does not create a new array.
//array.reduce((accumulator, currentValue, currentIndex, currentArray) => {}, initialValue);
// Return Type: Single Value
let values = [1,2,3,4,5];
let sum = values.reduce((accumulator, cValue, cIndex, cArray)=>{
  console.log("acc:"+accumulator+"cValue:"+cValue+"cIndex:"+cIndex);
  return accumulator + cValue;
});
console.log(sum); // 15
// initialValue is optional

//!RealTime Example- Add to Cart
let cart = [
  { name:"mobile", price: 20000, pty:1 },
  { name:"smartwatch", price: 5000, pty:2 },
  { name:"earbuds", price: 2000, pty:3 },
];
let totalAmount = cart.reduce((accumulator, product)=>{
  return accumulator + (product.price * product.pty);
},0);
console.log(totalAmount); // 34000


//~ 4. forEach()
//? Syntax: array.forEach(callback_function);
//* The forEach() method is used to iterate over an array and perform some operation for each and every element present inside the array.
//* It does not create a new array.
//array.forEach((currentValue, currentIndex, currentArray) => {});
// Return Type: undefined
let fruits = ["Apple","Banana","Mango","Orange"];
fruits.forEach((cValue, cIndex, cArray)=>{
    console.log(cValue);
});
//! Key Difference between forEach() and map()
//* The map() method will return a new array but forEach() method will return undefined.
//* Map() is used when we want to transform the array and create a new array whereas forEach() is used when we want to iterate each element without creating a new array.