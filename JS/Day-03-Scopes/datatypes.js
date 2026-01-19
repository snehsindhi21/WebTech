//! DataTypes in JS
//* Which type of data we can store in variable is known as DataTypes.
//?Types of DataTypes in JS:
//* 1. Primitive DataTypes- are the inbuilt datatype which are provide by language itself. It can capable to store single value only.

//~ 1.Number:-
//* The number includes everything like integers, decimal values, floating values, etc.

let num = 10;
console.log(num);

//! typeof operator : 
//* The typeof operator it is used to check the which type of data stored inside the given variable.
//? Syntax : typeof(variable) or typeof variable
console.log(typeof(num)); //number
console.log(typeof num); //number


//~ 2.String:-
//* The string is a collection of characters which are enclosed inside single or double quotes.
//? chahracters can be a-z, A-Z, 0-9, special characters, space etc.
//* There are three ways to create string in js:
        //*1. Using single quotes:
            let str='Hello World';
            console.log(str);
            console.log(typeof str); //string
        //*2. Using double quotes:
            let str1="Hello World";
        //*3. Using backticks (``) - template literals
            let hero="prabhas";
            console.log(`I am ${hero} from Bahubali`);
            let multiline=`this is first line
            this is second line`;
            console.log(multiline);

            
//~ 3.Boolean:-
//* Boolean will represent only two values either true or false.
//?true-->1-->yes
//?false-->0-->no

 //~ 4.Null:-
 //*The Null means nothing or empty but not equal to zero.
    let nullVar = null;
    console.log(nullVar); //null
    console.log(typeof nullVar); //object
    
    
//~ 5.Undefined:-
//* The variable has been declared but not initialized then by default it will be undefined.
    let undefVar;
    console.log(undefVar); //undefined
    console.log(typeof undefVar); //undefined

//~ 6.bigint:-
//* The value which is greater than 2^53-1 is considered as a big value.(Beyond safe limit).
    let bigvalue= 36477657483874387347383465473834n;

//~ 7.Smbol():-
//* The Smybol is a primitive value which is used to create the unique value.
    let value1 = Symbol("hello");
    let vslue2 = Symbol("hello");

    console.log(value1==value2);//false
    console.log(value1);
    console.log(value1.description);

    console.log(typeof(value1.description)); // string

//* 2. Non-Primitive DataTypes- are the user defined datatype which are created by user. It can capable to store multiple values.
    //~ 1.Object
    //~ 2.Array
    //~ 3.Function 