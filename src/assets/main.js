//Inicicializando Mapa
var platform = new H.service.Platform({
  app_id: 'O9DoY7KRd4GikQwomU1T', // // <-- ENTER YOUR APP ID HERE
  app_code: '_60riwD55GvOAy7LjosEhw', // <-- ENTER YOUR APP CODE HERE
});

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

  // Agregar marcadores al mapa
  var marker = new H.map.Marker(coordinates);
map.addObject(marker);
//Iconos personalizados para marcadores utilizando la clase H.map.Icon
var iconUrl = './images/marker-gelato.svg';

var iconOptions = {
	// The icon's size in pixel:
  size: new H.math.Size(26, 34),
	// The anchorage point in pixel, 
	// defaults to bottom-center
  anchor: new H.math.Point(14, 34)
};

var markerOptions = {
   icon: new H.map.Icon(iconUrl, iconOptions)
};

var marker = new H.map.Marker(coordinates, markerOptions);
map.addObject(marker);

//geolocalizacion watchPosition cada vez que cambie la posición del dispositivo.
function updatePosition (event) {
  var HEREHQcoordinates = {
    lat: event.coords.latitude,
    lng: event.coords.longitude
  };

  var marker = new H.map.Marker(HEREHQcoordinates);
  map.addObject(marker);
  map.setCenter(HEREHQcoordinates);
}

navigator.geolocation.watchPosition(updatePosition);
