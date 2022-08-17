// Shep will write stuff here...

//To Do: 




    
//create function to grab click to submit form
    // -prevent default for form
    // -set location to a variable and then send it to needed function
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



}
