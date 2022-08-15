// Putting in notes here before I write the JS.


// Maps Static API
// "https://maps.googleapis.com/maps/api/staticmap?center=" + Search Var + "&zoom=14&size=400x400&key=" + YOUR_API_KEY +"&signature=YOUR_SIGNATURE"


// Places API

// -----Temporary vars until form is completed
// var enteredQuery = "dog+park"
// var enteredCity ="Seattle"
// var selectedType = "park"

// // function searchMaps () {
// //     fetch ('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+ enteredQuery + '+' + enteredCity + '&type=' +selectedType +'&key=AIzaSyBJU4VLATDO1n8jKZPvOffGWqralRwGxQY', {
// //         mode: 'cors'
// //     })
// //     .then ((response) => {
// //         return response.json();
// //     })
// //     .then(function (mapsJSON) {
// //         console.log(mapsJSON);
// //     })
// // };

// // searchMaps ();

// geting the following error when trying to run this api call:

// Access to fetch at 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+park+Seattle&type=park&key=***KEY***' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

//Works in URL but not through JS



// Initialize and add the map
// function initMap() {    
    
//     // The location of Uluru
//     const geoLocation = { lat: 47.60, lng: -122.33 };
//     // The map, centered at Geolocation
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: geoLocation,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: geoLocation,
//       map: map,
//     });
//   }
  
//   window.initMap = initMap;

var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(47.60, -122.33);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: sydney, zoom: 15});

  var request = {
    query: 'Dog Park',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}