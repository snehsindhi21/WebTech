function calculateAge() {
    let userDob = document.getElementById("dob").value;
    //console.log(userDob);
    let userDate = new Date(userDob);
    //console.log(userDate);
    let userYear = userDate.getFullYear();
    //console.log(userYear);
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();

    if (todayYear < userYear){
        alert("Enter valid Date");
    }else{
        let age = todayYear - userYear;
        console.log(age);
        document.getElementById("displayAge").innerText = `Your Age is ${age} Years`;
    }
}