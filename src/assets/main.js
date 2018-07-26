//Inicializando Mapa
const platform = new H.service.Platform({
  app_id: 'O9DoY7KRd4GikQwomU1T', // // <-- ENTER YOUR APP ID HERE
  app_code: '_60riwD55GvOAy7LjosEhw', // <-- ENTER YOUR APP CODE HERE
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();
// se declaran variables vacias que tomen requerimientos
let currentPosition = null;
let map = null;

//geolocalizar
navigator.geolocation.getCurrentPosition((position)=>{
  currentPosition = position;
  // Instantiate (and display) a map object:
  map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map,
  {
    zoom: 15,
    //busca posición actual del usuario
    center: {
      lng: currentPosition.coords.longitude,
      lat: currentPosition.coords.latitude
    }
  });
  console.log(position);
})
// variable Explore envia solicitudes de búsqueda
var explore = new H.places.Explore(platform.getPlacesService()), exploreResult, error;

// Define search parameters:
var params = {
  // Look for places matching the category "eat and drink":
  'cat': 'eat-drink',

  'in': `${currentPosition.coords.longitude},${currentPosition.coords.latitude}`
};

// Run a search request with parameters, headers (empty), and callback functions:
explore.request(params, {}, onResult, onError);

// Define a callback function to handle data on success:
function onResult(data) {
  exploreResult = data;
  map.removeObject(markers); //remueve marcadores cuando cambias de geolocalización
  markers = []; //almacena los marcadores 
}
//recorrer items para la info de los restaurantes
exploreResult.results.items.forEach(item => {
  var icon = new H.map.Icon('../assets/img/icon/iconLocation.png');
  let coords = {
    lng: item.position[0],
    lat: item.position[1],
    direction: item.vicinity,
    title: item.title
  }
  var marker = new H.map.Marker(coords, { icon: icon });
  console.log();
});


// Define a callback function to handle errors:
function onError(data) {
  error = data;
}

// Run a search request with parameters, headers (empty), and callback functions:
explore.request(params, {}, onResult, onError);
        

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

