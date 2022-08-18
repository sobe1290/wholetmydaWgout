
const apiKey = "&appid=9f103066ad2690dfc98026104a1b9e25"
const mainDate = moment().format("MMM Do, YYYY");

$("#cityInputSubmit").on("click", () => {
    const cityName = $("#password").val();
    $("#password").val("");
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + apiKey
    const queryURLforcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
    $.ajax({
        url: URL,
        method: "GET" 

}).then(function(response){
    console.log(response.weather)
    console.log(response.coord);
    console.log(URL);
var lat = response.coord.lat;
var lon = response.coord.lon;

})
});
console.log('Latitutde:', lat)
console.log('Longitude:' , long)