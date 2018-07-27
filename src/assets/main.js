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
navigator.geolocation.getCurrentPosition((position) => {
  currentPosition = position;
  // Instantiate (and display) a map object:
  map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
      zoom: 11,
      //busca posición actual del usuario
      center: {
        lng: currentPosition.coords.longitude,
        lat: currentPosition.coords.latitude
      }
    });
  console.log(position);
})
// variable Explore envia solicitudes de búsqueda
var search = new H.places.Search(platform.getPlacesService()), searchResult, error;
let markers = [];

exampleFormControlSelect2.addEventListener('change', () => {
  // Define search parameters:
  var params = {
    // Look for places matching the category "eat and drink":
    'q': exampleFormControlSelect2.value,

    'at': `${currentPosition.coords.longitude},${currentPosition.coords.latitude}`
  };

  // Define a callback function to handle data on success:
  function onResult(exploreResult) {//remueve marcadores cuando cambias de geolocalización
    markers = []; //almacena los marcadores 
    //recorrer items para la info de los restaurantes
    console.log(exploreResult);
    exploreResult.results.items.forEach(item => {
      var icon = new H.map.Icon('./assets/img/icon/iconLocation.png');
      let coords = {
        lng: item.position[0],
        lat: item.position[1]
      }
      var marker = new H.map.Marker(coords, { icon: icon });
      markers.push(marker);
      map.addObject(marker);
    });
  }

  // Define a callback function to handle errors:
  function onError(data) {
    error = data;
  }

  // Run a search request with parameters, headers (empty), and callback functions:
  search.request(params, {}, onResult, onError);
})


