// Putting in notes here before I write the JS.


// Maps Static API
// "https://maps.googleapis.com/maps/api/staticmap?center=" + Search Var + "&zoom=14&size=400x400&key=" + YOUR_API_KEY +"&signature=YOUR_SIGNATURE"


// Places API

// -----Temporary vars until form is completed
var enteredQuery = "dog+park"
var enteredCity ="Seattle"
var selectedType = "park"

function searchMaps () {
    fetch ('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+ enteredQuery + '+' + enteredCity + '&type=' +selectedType +'&key=***KEY***')
    .then ((response) => {
        return response.json();
    })
    .then(function (mapsJSON) {
        console.log(mapsJSON);
    })
};

searchMaps ();

// geting the following error when trying to run this api call:

// Access to fetch at 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog+park+Seattle&type=park&key=***KEY***' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

//Works in URL but not through JS