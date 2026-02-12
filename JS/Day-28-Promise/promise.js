console.log("Promise in JS");

//! What is Promise ?
//* A promise is object in JS.
//* A promise is an eventual completion or failure of an asynchronous operation and it result's the output.

//! Stages of Promise:
//~ 1. pending-> Initial State -> Neither fulfilled nor rejected
//~ 2. resolved-> fulfilled-> Success-> data-> use the data
//~ 3. rejected-> rejection-> error-> handle the error
//~ 4. settled-> Either resolved or rejected


//! How to create promise?
let myPromise = new Promise((resolve, reject) => {
    let network = Math.floor(Math.random()*100);
    console.log(network);
    if(network>80){
        // resolve("Network aa gya hai niche aa jao");
        resolve([10,20,30,40,50]);
    }  else{
        reject("Thoda aur ghumao, network nhi aa rha");
    }
});
//console.log(myPromise);

//! How to handle the promise in two ways:
//~ 1. By using .then() and .catch() function
myPromise
    .then((data) => {
        console.log(data);
        
    }).catch((error) => {
        console.log(error);
        
    });

//! What is callback hell?
//* Callback hell happens when you have multiple asynchrnous operations that depend on each other and you nest callbacks inside callbacks inside callbacks.

// function getUser(id, callback) {
//     setTimeout(()=>{
//         let user ={ id: id, name: "jhon", role: "user"};
//         callback(user)
//     },1000);    
// }

// function addToCart(user, callback) {
//     setTimeout(()=>{
//         let orders =["order-1","order-2"];
//         callback(orders)
//     }, 2000);    
// }

// function orderDetails(order, callback) {
//     setTimeout(()=>{
//         let orderInfo ={ product: order, price:500};
//         callback(orderInfo)
//     },3000);    
// }

// let data = getUser(1,(user)=>{
//     console.log(user);
//     addToCart(user,(orders)=>{
//         console.log("orders:",orders);
//         orderDetails(orders[0],()=>{
//             console.log("orders[0]:",orders[0]);
//             console.log("Order Completed");
            
//         });
//     });
// });  

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "John", role: "user" });
    }, 1000);
  });
}

function addToCart(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order-1", "Order-1"]);
    }, 2000);
  });
}

function orderDetails(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ product: order, price: 500 });
    }, 3000);
  });
}

//! Promise Chaining:
// let fun = getUser(1);
// console.log(fun);
// fun
//   .then((user) => {
//     console.log(user);
//     return addToCart(user);
//   })
//   .then((orders) => {
//     console.log(orders);
//     return orderDetails(orders[0]);
//   })
//   .then((orderInfo) => {
//     console.log(orderInfo);
//     console.log("order Completed");
//   })
//   .catch((error) => {
//     console.log("Something went wrong:", error);
//   });


  //~ 2. By using async and await keyword
  //*  

    async function handlePromise() {
        try {
          let user = await getUser(1);
          console.log(user);
          let orders = await addToCart(user);
          console.log(orders);
          let orderInfo = await orderDetails(orders[0]);
          console.log(orderInfo);

        } catch (error) {
          console.log(error);
          
        }    
    }

    handlePromise();