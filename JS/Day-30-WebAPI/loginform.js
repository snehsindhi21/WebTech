let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let email= document.querySelector("input[type='email']").value;
    let password= document.querySelector("input[type='password']").value;
    console.log(email,password);

    //!storing the details
    window.localStorage.setItem("email",email);
    window.localStorage.setItem("password",password);
    
});

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault;

    //!reading the data from local storage
    let savedEmail = window.localStorage.getItem("email");
    let savedPassword = window.localStorage.getItem("password");

    let useremail = document.getElementById("user-email").value;
    let userpassword = document.getElementById("user-password").value;
    if (useremail === savedEmail && userpassword === savedPassword) {
        alert("Login Successfully");
    } else {
        alert("Invalid Credentials!");
    }
});