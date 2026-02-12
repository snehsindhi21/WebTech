console.log("Fetch API");
//* A fetch is a function in JS.
//* Also it id considered as API in between browser and backend to communicate or transfer that data.
//* A fetch is promise based API.

//? Return Type: promise-> pending
//? syntax: fetch("url")

// By using async and await:
//& step-1: Create one async function which is responsible to fetch the data.
let fetchUserData = async ()=>{
    try {
        //& step-2: Use the fetch() and pass url
        let response = await fetch("http://localhost:3000/users");
        console.log(response);
        //& step-3 Convert the JSON data into the JS object.
        let data = await response.json();
        console.log(data);
        document.getElementById("container").innerHTML = data.map((user,index)=>{
            return `<div class="user-card"><h2 class="user-id">ID: ${user.id}</h2><h2 class="user-name">Name: ${user.name}</h2><h2 class="user-role">Age: ${user.age}</h2></div>`
        })
        .join("");
    } catch (error) {
        console.error("could not fetch users",error);
        document.getElementById("container").innerHTML = `<p>Error loading users. Is the server running?</p>`
        
    }
}
fetchUserData();