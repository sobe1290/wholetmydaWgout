
var weatherEl = document.getElementById("testVar");
weatherEl.style.display = "none";

$(document).ready(function(){
  $('.check').click(function() {
      $('.check').not(this).prop('checked', false);
  });
});

const apiKey = "&appid=9f103066ad2690dfc98026104a1b9e25"
const mainDate = moment().format("MMM Do, YYYY");


$("#cityInputSubmit").on("click", () => {
  weatherEl.style.display = "block";
  selectedRadius = $("select").val(); 

  console.log(selectedRadius);

    if ($('#checkbox1').prop('checked')) {
        searchTerm = 'Dog Training';
    }
    
    if ($('#checkbox2').prop('checked')) {
        searchTerm = 'Veterinarian';
    }
    if ($('#checkbox3').prop('checked')) {
        searchTerm = 'Pet Store';
    }
    if ($('#checkbox4').prop('checked')) {
        searchTerm = 'Dog Park';
    }
    console.log(searchTerm)
    const cityName = $("#cityInput").val();
    $("#cityInput").val("");
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + apiKey+ "&units=imperial"
    const queryURLforcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=ecc0be5fd92206da3aa90cc41c13ca56";
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

    
/* 
    if (currentweather === "Rain") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentweather=== "Clouds") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/03d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentweather === "Clear") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    }
     else if (currentweather === "Drizzle") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/10d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    }
     else if (currentweather === "Snow") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    }*/
    //appending to render on page
    // var newDiv = $('<div>');

    // newDiv.append(displayMainDate, currentIcon, tempEL, humEl, windEl);

    // $("#testVar").html(newDiv);

    // var lat = response.coord.lat;
    // var long = response.coord.lon;
    // var weather =response.weather[0].main;
    // var temp = response.main.temp;
    // console.log('Latitutde:', lat)
    // console.log('Longitude:' , long)
    // console.log('Weather:' , weather)

    // var container3 =$("<h1>")
    // var container4 =$("<h1>")
    // var icon =$('01D')
    // container3.text(weather)
    // container4.text(temp)
    // $("#testVar").append(container3,container4)
    
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     const { main, name, sys, weather } = data;
  //     const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
  //       weather[0]["icon"]
  //     }.svg`;

  //     const li = document.createElement("li");
  //     li.classList.add("city");
  //     const markup = `
  //       <h2 class="city-name" data-name="${name},${sys.weather}">
  //         <span>${name}</span>
  //         <sup>${sys.Weather}</sup>
  //       </h2>
  //       <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
  //       <figure>
  //         <img class="city-icon" src="${icon}" alt="${
  //       weather[0]["description"]
  //     }">
  //         <figcaption>${weather[0]["description"]}</figcaption>
  //       </figure>
  //     `;
  //     li.innerHTML = markup;
  //     list.appendChild(li);
    // })
    



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
          radius: selectedRadius,
          query: searchTerm,
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

});
console.log('Latitutde:', lat)
console.log('Longitude:' , long)
