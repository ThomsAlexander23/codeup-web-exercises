"use strict"

// function to convert time to a proper date
function dateConverter(num) {
    var number = new Date(num * 1000).toString();
    var properDate = [(number.slice(4, 15)), (number.slice(0,3))]
    return properDate
}

// functions for fail and always methods for api requests
function onAlways() {console.log('loading')}
function onFail() {console.log('error'), alert('Bad Request')}

var popUpContent = ''

//function for current data to display in popup friendly format
function renderCurrent(object) {
    var content = `<div id="weather-card-current" class="card p-2 text-center">`
    content += `<div class="card-body p-0">`
    content += `<h5 class="card-title p-0">${object.temp.toFixed(0)}°F</h5>`
    content += `<p class="card-text p-0"><img id="weather-icon" src="http://openweathermap.org/img/w/${object.weather[0].icon}.png
" /></p></div>`
    content += `<ul class="list-group list-group-flush p-0">`
    content += `<li class="list-group-item p-0"><strong>${object.humidity.toFixed(0)}%</strong></li>`
    content += `<li class="list-group-item p-0"><strong>${object.wind_speed.toFixed(0)}mph</strong></li>`
    content += `<li class="list-group-item p-1">Feels like <strong>${object.feels_like.toFixed(0)}°F</strong></li></ul></div>`
    popUpContent = content
}

// function to get information from OpenWeather API for one day
function renderCard(object, index) {
    var content = `<div id="weather-card-${index}" class="card p-0 col-4 col-md-3 col-lg-4 col-xl-4 w-100 mx-auto my-2">`
    content += `<div class="d-md-none d-flex justify-content-center p-1 w-100 card-header">${dateConverter(object.dt)[1]}</div>`
    content += `<div class="d-none d-md-flex p-1 w-100 card-header justify-content-center">${dateConverter(object.dt)[0]}</div>`
    content += `<div class="card-body p-1">`
    content += `<h6 class="card-title d-flex justify-content-center">${object.temp.max.toFixed(0)}°F/${object.temp.min.toFixed(0)}°F</h6>`
    content += `<p class="card-text d-flex justify-content-center"><img id="weather-icon" src="http://openweathermap.org/img/w/${object.weather[0].icon}.png
" /></p></div>`
    content += `<p class="card-text d-none d-md-flex justify-content-center"><strong>${object.weather[0].description}</strong></p>`
    content += `<ul class="list-group list-group-flush p-1">`
    content += `<li class="list-group-item d-flex justify-content-center p-1"><strong>${object.humidity}</strong>%</li>`
    content += `<li class="list-group-item d-flex justify-content-center p-1"><strong>${object.wind_speed.toFixed(0)}</strong>mph</li>`
    content += `<li class="list-group-item d-none d-md-flex justify-content-center p-1"><strong>${object.pressure}</strong>hPa</li>`
    content += `</ul></div>`
    $('#weatherDIV').append(content)
}

//mapbox token = mapbox access
mapboxgl.accessToken = mapboxToken;
var defaultLocation = 'San Antonio, TX'
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [0, 0],
    Zoom: 10
})
//mapbox marker generation
var initialMarker = new mapboxgl.Marker({
    color: 'cornflowerblue',
    draggable: true
}).setLngLat({lng: 0, lat: 0}).addTo(map)
//mapbox geocoder generation
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
});
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// event to load and display proper data upon input into geocoder
geocoder.on('result', function (result) {
    $('#header-city-name').text($('.mapboxgl-ctrl-geocoder--input').val())
    initialMarker.setLngLat({lng: result.result.center[0], lat: result.result.center[1]}).addTo(map)
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appId: OPEN_WEATHER_APPID,
        lat: result.result.center[1],
        lon: result.result.center[0],
        units: "imperial",
    }).always(onAlways).fail(onFail).done(function (data) {
        renderCurrent(data.current)
        initialMarker.setPopup(new mapboxgl.Popup({closeButton: false, closeOnMove: true}).setHTML(popUpContent))
        $('#weatherDIV').html(' ')
        data.daily.forEach(function (element, index) {
            if (index < $(':checked').val() ) {
                renderCard(element, index)
            }
        })
    })
})

// function for error callback if geolocation disabled by user
function error() {
    $('#search').val(defaultLocation);
    $('#header-city-name').text(`${defaultLocation}`);
    alert('default position enabled');
    geocode(defaultLocation, mapboxToken).then(function (results) {
        map.flyTo({center: results, zoom: 13})
        initialMarker.setLngLat(results)
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appId: OPEN_WEATHER_APPID,
            lat: initialMarker.getLngLat().lat,
            lon: initialMarker.getLngLat().lng,
            units: "imperial",
        }).always(onAlways).fail(onFail).done(function (data) {
            renderCurrent(data.current)
            initialMarker.setPopup(new mapboxgl.Popup({closeButton: false, closeOnMove: true}).setHTML(popUpContent))
            $('#weatherDIV').html(' ')
            data.daily.forEach(function (element, index) {
                if (index < $(':checked').val()) {
                    renderCard(element, index)
                }
            })
        })
    })
}

// function for successful geolocation of user, load/display correct information
function success(position) {
    reverseGeocode({
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }, mapboxToken).then(function (results) {
        $('#header-city-name').text(results);
        map.flyTo({center: [position.coords.longitude, position.coords.latitude], zoom: 13})
        initialMarker.setLngLat({lng: position.coords.longitude, lat: position.coords.latitude})
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appId: OPEN_WEATHER_APPID,
            lat: initialMarker.getLngLat().lat,
            lon: initialMarker.getLngLat().lng,
            units: "imperial",
        }).always(onAlways).fail(onFail).done(function (data) {
            renderCurrent(data.current)
            initialMarker.setPopup(new mapboxgl.Popup({closeButton: false, closeOnMove: true}).setHTML(popUpContent));
            $('#weatherDIV').html(' ')
            data.daily.forEach(function (element, index) {
                if (index < $(':checked').val()) {
                    renderCard(element, index)
                }
            })
        })
    })
}

// if/else for geolocation capability of user equiptment
if (!navigator.geolocation) {
    console.log('geolocation not supported by browser');
    $('#header-city-name').text(defaultLocation);
    error()
    alert('geolocation not supported');
}
else {
    console.log('locating...');
    navigator.geolocation.getCurrentPosition(success, error)
    console.log('done');
}

// function for updating infromation followed by generation of the new information
function onDragEnd() {
    var lngLat = initialMarker.getLngLat();
    console.log('hey')
    reverseGeocode({lng: lngLat.lng, lat: lngLat.lat}, mapboxToken).then(function (results) {
        $('#header-city-name').text(results);
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appId: OPEN_WEATHER_APPID,
            lat: lngLat.lat,
            lon: lngLat.lng,
            units: "imperial",
        }).always(onAlways).fail(onFail).done(function (data) {
            renderCurrent(data.current)
            initialMarker.setPopup(new mapboxgl.Popup({closeButton: false, closeOnMove: true}).setHTML(popUpContent))
            $('#weatherDIV').html(' ')
            data.daily.forEach(function (element, index) {
                if (index < $(':checked').val()) {
                    renderCard(element, index)
                }
            })
        })
    })
}

// function for updating card rendering based on radio input
function forecastDisplay(){
    var lngLat = initialMarker.getLngLat();
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appId: OPEN_WEATHER_APPID,
        lat: lngLat.lat,
        lon: lngLat.lng,
        units: "imperial",
    }).always(onAlways).fail(onFail).done(function (data) {
        renderCurrent(data.current)
        initialMarker.setPopup(new mapboxgl.Popup({closeButton: false, closeOnMove: true}).setHTML(popUpContent))
        $('#weatherDIV').html(' ')
        data.daily.forEach(function (element, index) {
            if (index < $(':checked').val()) {
                renderCard(element, index)
            }
        })
    })
};

$(window).on('load',function(){
    if ($(window).innerWidth() < 576){
        $('#three-day').attr('checked', true)
        forecastDisplay()
    }
    else if ($(window).innerWidth() > 922){
        $('#seven-day').attr('checked', true)
        forecastDisplay()
    }
})
$(window).on('resize',function(){
    if ($(window).innerWidth() < 576){
        $('#three-day').attr('checked', true)
        forecastDisplay()
    }
    else if ($(window).innerWidth() > 922){
        $('#seven-day').attr('checked', true)
        forecastDisplay()
    }
    else {
        $('#five-day').attr('checked', true)
        forecastDisplay()
    }
})

// event for proper display based on radio button selection, updates as changed
$('.forecast-select').on('change', forecastDisplay)
initialMarker.on('dragend', onDragEnd);
//     $(document).ready(function () {