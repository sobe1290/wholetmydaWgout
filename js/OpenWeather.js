var weatherEl = document.getElementById("testVar");
weatherEl.style.display = "none";

$(document).ready(function(){
  $('.check').click(function() {
      $('.check').not(this).prop('checked', false);
  });
});

const apiKey = "&appid=9f103066ad2690dfc98026104a1b9e25"
const mainDate = moment().format("MMM Do, YYYY");
var locationentered = JSON.parse(localStorage.getItem("textEntered")) || [];
var cityName;
var selectedRadius;
var searchTerm;

function mainTask() {
$("#cityInputSubmit").on("click", () => {
  weatherEl.style.display = "block";
  window.selectedRadius = $("select").val(); 

  console.log(window.selectedRadius);

    if ($('#checkbox1').prop('checked')) {
      window.searchTerm = 'Dog Training';
    }
    
    if ($('#checkbox2').prop('checked')) {
      window.searchTerm = 'Veterinarian';
    }
    if ($('#checkbox3').prop('checked')) {
      window.searchTerm = 'Pet Store';
    }
    if ($('#checkbox4').prop('checked')) {
      window.searchTerm = 'Dog Park';
    }
    console.log(window.searchTerm);

        /// **** stuff from Scott************
        //local storage variables
        window.cityName = $("#cityInput").val();       
        locationentered.push(window.cityName);
        localStorage.setItem("textEntered", JSON.stringify(locationentered));
        //Clear list
        function removeAllChildNodes(parent) {
          while (parent.firstChild) {
              parent.removeChild(parent.firstChild);
          }
        } 
        const citylist = document.querySelector('#citylist');
        removeAllChildNodes(citylist);
        //Add stored list
        citylistMain();
        //update map and weather
        mapweatherTask();
})};
function mapweatherTask() {
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + window.cityName + apiKey+ "&units=imperial";
    const queryURLforcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + window.cityName + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
    $.ajax({
        url: URL,
        method: "GET" 

}).then(function(response){
  console.log(response.main.temp)
    console.log(response.weather)
    console.log(response.coord);
    console.log(URL);
    var cityNameEl = $("<h2>").text(response.name);
    var displayMainDate = cityNameEl.append(" " + mainDate);
    var tempEL = $("<p>").text("Temperture: " + response.main.temp);
    var humEl = $("<p>").text("Humidity: " + response.main.humidity);
    var currentweather = response.weather[0].main;
    const {icon} = response.weather[0]
    const {speed} = response.wind;
    const {temp} = response.main;
    const {name} = response;
    $("#weatherForCity").text(name);
    $('#weatherIcon').attr("src",'https://openweathermap.org/img/wn/'+ icon +'.png')
    $('#windSpeed').text(speed+" MPH");
    $("#currentTemp").text(temp + "°F");

    var lat = response.coord.lat;
    var long = response.coord.lon;
    var map;
    var service;
    var infowindow; 
    
    function initMap() {
        var geoLocation = new google.maps.LatLng(lat, long);
      
        infowindow = new google.maps.InfoWindow();
      
        map = new google.maps.Map(
            document.getElementById('map'), {center: geoLocation, zoom: 13});
      
        var request = {
          location: geoLocation,
          radius: window.selectedRadius,
          query: window.searchTerm,
        };
      
        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
      }

      initMap();
      
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
})
};

mainTask();
function citylistMain() {
//Create new list
    locationentered = JSON.parse(localStorage.getItem("textEntered"));
    for (let i = 0; i < locationentered.length; i++) { 
      var citylistEL = document.getElementById("citylist"); // container to place searched city name
      var div = document.createElement("div");
      var spanRefresh = document.createElement("span");
      var spanClose   = document.createElement("span");
      var iFA = document.createElement("i");
      var divChild1 = document.createElement("div");
      var divChild2 = document.createElement("div");
      var divChild3 = document.createElement("div");
      var divChild4 = document.createElement("div");
      citylistEL.append(div);
      div.setAttribute("class","grid-x");
      div.setAttribute("id",`row${i}`);
      var citylistRowEL = document.getElementById(`row${i}`);
      citylistRowEL.append(divChild1);
      divChild1.setAttribute("class","cell small-1");
      divChild1.append(iFA);
      iFA.setAttribute("Class","fa-solid fa-paw")
      citylistRowEL.append(divChild2);
      divChild2.setAttribute("class","cell small-9");
      divChild2.textContent = locationentered[i];
      citylistRowEL.append(divChild3);
      divChild3.setAttribute("class","cell small-1");
      divChild3.append(spanRefresh);
      spanRefresh.setAttribute("class","material-symbols-outlined");
      spanRefresh.setAttribute("id",`refresh${i}`);
      spanRefresh.textContent = ""; //" refresh "
      citylistRowEL.append(divChild4);
      divChild4.setAttribute("class","cell small-1");
      divChild4.append(spanClose);
      spanClose.setAttribute("class","material-symbols-outlined");
      spanClose.setAttribute("id",`close${i}`);
      spanClose.textContent = " close ";

      // document.querySelector(`#refresh${i}`).addEventListener("click", function(event) {
      //   event.preventDefault();
      //   window.cityName = locationentered[i];
      //   $("#cityInput").val(`${locationentered[i]}`);
      //   mapweatherTask();
      //   //window.cityName = "";
      //   //$("#cityInput").val("");
      //   console.log("It worked!");
      //   console.log($("#cityInput").val());
      //   console.log(window.cityName);
      // });
      document.querySelector(`#close${i}`).addEventListener("click", function(event) {
        event.preventDefault();
        var counti = 0;
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
              }
            }
          var row = document.querySelector(`#row${i}`);
          removeAllChildNodes(row);
          row.remove();
          locationentered.splice(i-counti,1);
          counti++;
          localStorage.setItem("textEntered", JSON.stringify(locationentered));
      }); 
    }
};
citylistMain();