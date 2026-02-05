console.log("");

//! 2. Form Events:

let username  = document.querySelector("input[type='text']");
console.log(username);

username.addEventListener("focus",()=>{
    username.style.outline = "none";
    username.style.border= "2px solid green";
});

username.addEventListener("blur",()=>{
    username.style.outline = "none";
    username.style.border= "2px solid red";
});

//! 3. Keyboard Events:
// document.getElementById("myText").addEventListener
// ("keyup",(e)=>{
//     console.log(e.key); 
// });

// document.getElementById("myText").addEventListener
// ("keydown",(e)=>{
//     console.log(e.key); 
// });

document.getElementById("myText").addEventListener
("keypress",(e)=>{
    console.log(e.key); 
});

document.getElementById("coding").addEventListener("keydown",(e)=>{
    if(e.ctrlKey && e.key =="c" || e.key=="v"){
        e.preventDefault();
        alert("Ctrl+C and Ctrl+V is disabled");
    }
});


//! 4. Clipboard Events:
//? copy, paste, cut

let editor = document.getElementById("editor");

editor.addEventListener("copy", (e)=>{
    console.log("Text copied to clipboard");
    e.clipboardData.setData("text/plain", "copy nahi hoga bhaii");
    e.preventDefault();
});

editor.addEventListener("cut",(e)=>{
    console.log("text is cut");

});

editor.addEventListener("paste",(e)=>{
    console.log("text is paste");
});

//Real world selection example

document.addEventListener('copy',(e)=>{
    //get the data currently being copied
    const selection = document.getSelection().toString();
    console.log('User copied:',selection);
    
    //Example to modify the data before it enters the clipboard
    e.clipboardData.setData('text/plain',selection.toUpperCase());
    e.preventDefault(); //required to override default behaviour
})

//! 5. Window Events:
//