var map;
var service;
var infowindow;

function initMap() {
  var geoLocation = new google.maps.LatLng(47.60, -122.33);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: geoLocation, zoom: 15});

  var request = {
    query: 'Dog Park',
    fields: ['name', 'geometry', 'type'],
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

function createMarker(place) {

    new google.maps.Marker({
        position: place.geometry.location,
        map: map
    });
}
