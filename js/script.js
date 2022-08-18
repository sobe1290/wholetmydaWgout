// Shep will write stuff here...

//create variables for DOM mapping
var searchForm = document.querySelector(".navBar"); //search form
var userLocation = document.querySelector("#userLocat"); // users Location
var submitbtn = document.querySelector("#submitbtn");



    
//create function to grab click to submit form
//submitbtn.addEventListener(); //add Karim's function
   
    // -set location to a variable and then send it to needed function ***grab from Karim

//create function to record user choices
function petCriteria() {
    let userCity =userLocation.value; //grab the user input for location
    //grab the checked boxes
    let checkboxes = document.querySelectorAll("input:checked");
    let criteria = [];
    checkboxes.forEach((checkbox) => {
        criteria.push(checkbox.value); 
    });
    return userCity; 
}

//create function to send user choices to correct spot(create variable to go to)


/// **** stuff from Patrick************

// var searchTerm = 'Veterinarian' //Shep change this
// var selectedRadius = '500' //Shep change this
// var lat = 47.60 // comes from Karim
// var long = -122.33 // comes from Karim
// //make function to run initMap
//***********************************

/// **** stuff from Scott************
//local storage variables
var citylistEL = document.getElementById("citylist");
var cityInputEL = document.getElementById("cityInput");
var cityInputSubmitEL = document.getElementById("cityInputSubmit");
var textEntered = localStorage.getItem("textEntered") || [];
console.log(citylistEL);
for (let i = 0; i < 5 ; i++) { //textEntered.length
    var locationentered = JSON.parse(localStorage.getItem("textEntered")) || "";
    console.log(locationentered);
    if (!locationentered[i]) {
        locationentered[i] = ""
    } else {
        locationentered[i] = locationentered[i]
    };
    //Create list element
    var li = document.createElement("li");
    li.setAttribute("id",`li${i}`)
    citylistEL.appendChild(li);
// cityInput is Location input field
}
    //Save textentered info to 
    document.querySelector("cityInputSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        textEntered[i] = document.querySelector(cityInputEL).value;
        localStorage.setItem("textEntered", JSON.stringify(textEntered));
    console.log(cityInputSubmitEL);
    console.log(cityInputEL);
    });