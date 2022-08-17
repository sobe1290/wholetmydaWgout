var map;
var service;
var infowindow;

var searchTerm = 'Veterinarian'
var selectedRadius = '500'
var lat = 47.60
var long = -122.33

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
