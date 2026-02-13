console.log("Web API");

//! What is Web API?
//* Web API is provided by the browser enviornment not by the JS.
//* Here we are going to learn about storage based API

//^ Storage Based API
//~ 1. local storage:
//* Inside the local storage your data will be stored as permanently until and unless you will not delete it or remove it manually.
//size- 5-10MB
//* The data will be stored in the local storage in the form of string format only.
//* If JS object-> convert it into the string -> store

//? local storage provides 3 methods:
//& 1. localstorage.setItem("key", value)
//* for storing the data inside local storage.
window.localStorage.setItem("token",abwdavkuywdgabwdjbawhdawdg);

//& 2. localstorage.getItem("key")
//* Reading the data from localstorage
let token = window.localStorage.getItem("token");
console.log(token);

//& 3. localstorage.removeItem("key")
//* to remove the data from localstorage
document.getElementById("btn").addEventListener("click",()=>{
    window.localStorage.removeItem("token");
});



//~ 2. session storage:
//* The session storage will allows us to store the data only when your session or tab is live/open.
//size: 5-10MB
//* The data will be stored in session storage in the form of string format only.
//* If JS object-> convert it into the string-> store

let status = document.getElementById("status");
window.sessionStoragesetItem("isLoggedIn", true);
let userLoginStatus = sessionStorage.getItem("isLoggedIn");
console.log(userLoginStatus);

if (userLoginStatus === "true") {
    status.innerHTML = "Welcome back User!";
}
document.getElementById("logout").addEventListener("click",() => {
    sessionStorage.removeItem("isLoggedIn");
    status.innerHTML = "User is Logout!"
});


//~ 3. cookies:
//* cookies are nothing but the small chunks of files or code.

document.cookie = "Username=john";
console.log(document.cookie);
