/* https://places.cit.api.here.com/places/v1/discover/explore?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw

https://places.cit.api.here.com/places/v1/discover/search?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw
*/
const printList = document.getElementById("printList")

const locality = `https://places.cit.api.here.com/places/v1/discover/explore?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw&at=-33.4188226,-70.6422839&pretty
`
fetch(locality)
.then(response => response.json())
.then( discover => {
  console.log(discover);
  printInfo(discover);
});

const printInfo = (discover) => {
  printList.innerHTML += `${JSON.stringify
    (discover.results.items[0].title)}`
};

// Define search parameters:
var params = {
  // Look for places matching the category "eat and drink":
  'cat': 'eat-drink',

  'in': `${currentPosition.coords.longitude}, ${currentPosition.coords.latitude} `
};

const btn = document.querySelector("button");
//creo evento para la busqueda del input 
btn.addEventListener('click', () => {
  const input = searchFood.value;
  input = ' ';
  if (input === '') {
    alert("Por favor, debe introducir texto");
  } else {
    params;
  }
});


// Define a callback function to handle errors:
function onError(data) {
  error = data;
}




// Run a search request with parameters, headers (empty), and callback functions:
explore.request(params, {}, onResult, onError);


  // Obtain the default map types from the platform object
  //var maptypes = platform.createDefaultLayers();



/*
var defaultLayers = platform.createDefaultLayers();
var mapPlaceholder = document.getElementById('map-container');

//var map = new H.Map(
//  mapContainer,
//  defaultLayers.normal.map);
//Tamaños mapa en difrentes pantallas
window.addEventListener('resize', function () {
  map.getViewPort().resize();
});

//Punto central del mapa y el nivel de zoom inicial del mapa. 
var coordinates = {
  lat: -33.43727, // Aquí estamos en santgo Centro
  lng: -70.65056
};

var mapOptions = {
  center: coordinates,
  zoom: 14
}

var map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions);

//Interacción mapa
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));  

//geolocalizacion watchPosition cada vez que cambie la posición del dispositivo.
function updatePosition (event) {
  var HEREHQcoordinates = {
    lat: event.coords.latitude,
    lng: event.coords.longitude
  };
console.log(HEREHQcoordinates)

  var marker = new H.map.Marker(HEREHQcoordinates);
  map.addObject(marker);
  map.setCenter(HEREHQcoordinates);
}

navigator.geolocation.watchPosition(updatePosition);

//agregar marcador nuevo
var marker = new H.map.Marker(coordinates);
map.addObject(marker);

//clear map y poner pines*/


