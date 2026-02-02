//! Array :
//* Array is a special type of object in js.
//* The array is collection of multiple elements.
//* The array may be homogenous or heterogenous.

//? 1.Homogenous Array
//* The array which consist of same type of data
let arrNum = [1,2,3,4,5];
let arrStr = ["hello","Bye","gn"];
console.log(typeof arrNum); // Object

//? 2.Heterogenous Array
//* The array which consist of different type of data.
let mixedAr = [
    10,
    true,
    null,
    "hello",
    3.16,
    function (){
        console.log("Function Executed");
    },
    [60, 40, 20,[50]],
];

//! Accessing the array elements
console.log(mixedAr[0]);
mixedAr[5]();
console.log(mixedAr[6][3][0]);

//! Array Property: length
//? 1. Getting the length
console.log(mixedAr.length);//7

//? 2. Setting the length
mixedAr.length = 5;
console.log(mixedAr);

//! Ways to create an array:
//? 1. By using literal - []
//? 2.By using Array() constructor

let arr = new Array(10,20,30,40);
console.log(arr);//[10,20,30,40]

//TODO: NOTE- If you pass only one element to Array() constructor, it will be considerd as a length of the array.
let arr2 = new Array(5);
console.log(arr2);//(5)[emppty x 5]


//! Array Methods: (Static Methods)
//? 1. Array.form()
let str = "hello";
console.log(Array.from(str));//['h','e','l','l','o']


//? 2. Array.isArray()
console.log(Array.isArray(arr2)); //true

//? 3. Array.of()
console.log(Array.of(1,2,3,4));//[1,2,3,4]



//! Array Instance Methods:
//? 1. push()
let numArr = [10, 20];
console.log(numArr);
numArr.push(30, 40, 50, 60, 70, 80, 90, 100);
console.log(numArr);

//? 2. pop():
numArr.pop();
console.log(numArr);//[10,20,30,40,50,60,70,80,90]

//? 3. unshift():
numArr.unshift("hello");
console.log(numArr);//["hello",10,20,30,40,50,60,70,80,90]

//? 4. shift():
numArr.shift();
numArr.shift();
console.log(numArr);//[20,30,40,50,60,70,80,90]

//? 5. slice(startIndex, endIndex):
console.log(numArr.slice(1, 7));//[30,40,50,60,70,80]

//? 6. splice(startIndex, deleteCount, [newEle]):
let heros = ["Iron Man", "Hulk", "Thor", "Deadpool", "Blue Bettle", "Wanda"];
console.log(heros);
heros.splice(4, 1, "CA");
console.log(heros);

//? 7. includes():
console.log(heros.includes("Hawkey")); // false
console.log(heros.includes("Thor"));

//? 8. indexOf()
//? 9. concat()
let newarr = ["Dr. Strange"];
console.log(newarr);
let marval = heros.concat(newarr);
// console.log(marval);
console.log(heros.concat(newarr));

//? 11. join()
console.log(heros.join("-"));

//? 12. reverse()
console.log(heros.reverse());

//? 10. flat():
let nestedArr = [10, 20, 30, [40, 50, [60, 70]]];
console.log(nestedArr);
console.log(nestedArr.flat(2));

//? 13. find():
//* Syntax: arr.find(callback_fun);

let users = [{id:101, name:"John"},
             {id:102, name:"Alex"},
             {id:103, name:"Bob"},
             {id:104, name:"Charlie"}];

console.log(users);

let userdetatils = users.find((user)=>{
    return user.id === 103;
});
console.log(userdetatils);
