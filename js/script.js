// Shep will write stuff here...

//create variables for DOM mapping
var searchForm = document.querySelector(".navBar"); //search form
var userLocation = document.querySelector("#userLocat"); // users Location
var submitbtn = document.querySelector("#submitbtn");




/// **** stuff from Patrick************

// var searchTerm = 'Veterinarian' //Shep change this
// var selectedRadius = '500' //Shep change this
// var lat = 47.60 // comes from Karim
// var long = -122.33 // comes from Karim
// //make function to run initMap
//***********************************

/// **** stuff from Scott************
//local storage variables
var citylistEL = document.getElementById("citylist"); // container to place searched city name
var cityInputEL = document.getElementById("cityInput"); // input filed for city
var cityInputSubmitEL = document.getElementById("cityInputSubmit"); // submit button
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
    //Save textentered info to local storage
    cityInputSubmitEL.addEventListener("click", function(event) {
        event.preventDefault();
        textEntered[i] = cityInputEL.value;
        localStorage.setItem("textEntered", JSON.stringify(textEntered));
    console.log(cityInputSubmitEL);
    console.log(cityInputEL);
    });


    //event listener for submit button to grab ppls criteria
 cityInputEL.addEventListener("click",petCriteria);  
  

 //create function to record user choices
 function petCriteria() {
     
     //grab the checked boxes
     let checkedboxes = document.querySelectorAll('input[type="checkbox"]:checked');
     let criteria = [];
     for (var checkbox of checkedboxes) {
         console.log(checkbox.value);
         criteria =+ checkbox.value;
     };
     return criteria; 
 }
 
 //create function to send user choices to correct spot(create variable to go to)