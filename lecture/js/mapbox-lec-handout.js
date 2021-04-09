"use strict";
/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates [-98.4861, 29.4252]
//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)
mapboxgl.accessToken = mapboxToken;

var mapOptions = [
    {
        // kootenai falls
        container: "map",
        style: "mapbox://styles/mapbox/satellite-v9",
        center: [-115.7632, 48.4555],
        zoom: 15
    },
    {
        // alamo
        container: "map",
        style: "mapbox://styles/mapbox/satellite-v9",
        center: [-98.4861, 29.4260],
        zoom: 15
    },
    {
        //san antone
        container: "map",
        style: "mapbox://styles/mapbox/satellite-v9",
        center: [-98.4896, 29.42685],
        zoom: 8
    },
    {
        // dallas
        container: "map",
        style: "mapbox://styles/mapbox/satellite-v9",
        center: [-96.8058, 32.7787],
        zoom: 15
    },


]
// var map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/satellite-v9', // style URL
//     center: [-115.7632, 48.4555], // starting position [lng, lat]
//     zoom: 15 // starting zoom
// });

/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.

// TODO TOGETHER: Change the color of the marker

// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]

// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


var map = new mapboxgl.Map(mapOptions[2]);
var alamoMarker = new mapboxgl.Marker({
    color: "royalblue",
    draggable: false})
    .setLngLat([-98.4861, 29.4260])
    .addTo(map)

var sanAntonioMarker = new mapboxgl.Marker({
    color: "firebrick",
    draggable: false})
    .setLngLat(mapOptions[2].center)
    .addTo(map)

/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"
var sanAntonioPopUp = new mapboxgl.Popup({
    closeButton: false,
    closeOnMove: true,

})
    .setLngLat(mapOptions[2].center)
    .setHTML('<h6 class="d-none">CodeUp</h6><h6>San Antonio, TX</h6><p>this place is dope</p>' )
    // .addTo(map)

sanAntonioMarker.on("click", function(){
    sanAntonioPopUp.addTo(map)
})

// sanAntonioMarker.setPopup(sanAntonioPopUp)

// sanAntonioPopUp.on('close', function(){
//     console.log('popup was closed');
// });
//
// sanAntonioPopUp.on('open', function(){
//     console.log('popup is open');
// });


// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!
var alamoPopUp = new mapboxgl.Popup({
    closeButton: false,
    closeOnMove: true,
})
    .setLngLat(mapOptions[1].center)
    .setHTML('<h6>The Alamo</h6><h6>San Antonio, TX</h6><p>American Fortitude</p>' )
    // .addTo(map)

// alamoMarker.setPopup(alamoPopUp)


// TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!
// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter

geocode("701 Commerce St #100A, Dallas, TX 75202", mapboxToken).then(function(results){
    console.log(results)
    map.setCenter(results)
})


//TODO: Using the geocode method above, add a marker at Codeup to the map

geocode("659 Pelis Rd, Newark, NY", mapboxToken).then(function(results){
    new mapboxgl.Marker().setLngLat(results).addTo(map)
})


//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()
geocode("428 bannack ct, missoula, mt", mapboxToken).then(function(results){
    map.flyTo({center:results})
})


// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo
reverseGeocode({lat: 29.4260, lng: -98.4861}, mapboxToken).then(function(results){
    console.log(results)
})


// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


