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
    zoom: 10,
    //busca posición actual del usuario
    center: {
      lng: currentPosition.coords.longitude,
      lat: currentPosition.coords.latitude
    }
  });
})
// variable Explore envia solicitudes de búsqueda
var explore = new H.places.Explore(platform.getPlacesService()), exploreResult, error;
