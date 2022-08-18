
const apiKey = "&appid=9f103066ad2690dfc98026104a1b9e25"
const mainDate = moment().format("MMM Do, YYYY");

$("#cityInputSubmit").on("click", () => {
    const cityName = $("#cityInput").val();
    $("#cityInput").val("");
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


var map;
var service;
var infowindow;

var searchTerm = 'Veterinarian' //Shep change this
var selectedRadius = '500' //Shep change this

//make function to run initMap

function initMap() {
  var geoLocation = new google.maps.LatLng(lat, long);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: geoLocation, zoom: 13});

  var request = {
    location: geoLocation,
    radius: selectedRadius,
    query: searchTerm,
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {

    new google.maps.Marker({
        position: place.geometry.location,
        map: map
    });
}

