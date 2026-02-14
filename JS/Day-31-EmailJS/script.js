//! We have to initialize the emailjs to your code
(function ( ) {
    emailjs.init("mGmDgq8XRq2PMKuWS")
})();

//! Accessing the form data
let feedbackForm = document.getElementById("feedbackForm");
feedbackForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userName= document.getElementById("name").Value;
    let userEmail = document.getElementById("email").value;
    let userMsg = document.getElementById("message").value;

    //!Payload:
    let payload = {
        tittle : userName,
        name: userName,
        email: userEmail,
        message: userMsg
    };
    emailjs.send("service_162j2r8","template_bzuviu4",payload).then((respone)=>{
        console.log("response:",respone);
        alert("Email Sent Successfully");
        feedbackForm.reset();
    }).catch((error)=>{
        console.error("error:",error);
        alert("Failed to Send Email");
    })
})
    
//!using async await
// let sendBtn =document.getElementById("sendBtn");
// sendBtn.addEventListener("click",async(e)=>{
//     e.preventDefault;
    // try {
//     let response = await emailjs.send("service_162j2r8","template_5pdtp6q",payload);
//     console.log("response:",respone);
//         alert("Email Sent Successfully");
//         feedbackForm.reset();
//         sendBtn.innerText ="Send Email";
//         sendBtn.disable= false;
    
// } catch (error) {
//         console.error("error:",error);
//         alert("Failed to Send Email");
//         sendBtn.innerText ="Send Email"
//         sendBtn.disable = false;
// }
// })