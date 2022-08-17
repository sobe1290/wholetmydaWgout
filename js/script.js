// Shep will write stuff here...

//create variables for DOM mapping
var searchForm = document.querySelector(".navBar"); //search form
var userLocation = document.querySelector("#userLocat"); // users Location
var submitbtn = document.querySelector("#submitbtn");



    
//create function to grab click to submit form
submitbtn.addEventListener(); //add Karim's function
   
    // -set location to a variable and then send it to needed function ***grab from Karim

//create function to record user choices
function petCriteria() {
    let userCity =userLocation.value//grab the user input for location
    //grab the checked boxes
    let checkboxes = document.querySelectorAll("input:checked");
    let criteria = [];
    checkboxes.forEach((checkbox) => {
        criteria.push(checkbox.value) 
    };
    return userCity, 
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
var citylistEL = $('.citylist');
var textEntered = localStorage.getItem("textEntered") || [];

for (let i = 0; i < textEntered.length; i++) {
    var locationentered = JSON.parse(localStorage.getItem("textEntered")) || "";
    if (!locationentered[i]) {
        locationentered[i] = ""
    } else {
        locationentered[i] = locationentered[i]
    };
    //Create list element
    timeblockEL.append($(`<li id="li${i}">${locationentered[i] || []}</li>`));


// cityInput is Location input field
}