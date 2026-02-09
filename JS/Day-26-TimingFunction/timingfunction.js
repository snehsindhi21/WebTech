console.log("Timing Functions");

//!Timing Function
//~ 1. setTimeout()
//~ 2. setInterval()
//~ 3. clearTimeout()
//~ 4. clearInterval()

//setTimeout and clearTimeout
//* The setTimeout() method is used to delay the task by certain period of time.
//* setTimeout() will execute only once.
//? Syntax: setTimeout(()=>{},timeout(ms))

console.log("start");

let task = setTimeout(() => {
   alert("paused") 
}, 5000);

console.log("End");

document.getElementById("btn");
addEventListener("click",()=>{
    clearTimeout(task);
});

//setInterval and clearInterval
//* The setInterval() is used to repeat a task after particular given interval of time.
//* setInterval() will execute again and again.

let count = 10;
let timer = setInterval(() => {
    console.log("count-",count--);
    if (count==0) {
        clearInterval(timer);
        console.log("Boom Bhagoo");
    }
}, 1000);