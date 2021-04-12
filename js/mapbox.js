(function () {
    "use strict"


    mapboxgl.accessToken = mapboxToken;

    var topEats = [
        {
            name: 'Eatery 112',
            address: '112 N 3rd St Minneapolis, MN, 55401',
            center: [],
            info: 'Classy Dates and Exquisite Food',
            image: 'img/eatery112.jpeg'
        },
        {
            name: 'Notorious P.I.G.',
            address: '3621 Old U.S. 93, Missoula, MT 59804',
            center: [],
            info: 'BBQ so good you could die',
            image: 'img/notorious.jpeg'
        },
        {
            name: 'NY Beer Project',
            address: '300 High St, Victor, NY 14564',
            center: [],
            info: 'Beer so good you could die',
            image: 'img/beer-project.jpeg'
        }
    ];
    // get coordinates prior to map generation through geocoding
    topEats.forEach(function (element, index) {
        geocode(element.address, mapboxToken).then(function(results) {
            element.center = results
        })
    })
    $(document).ready(function () {
        setTimeout(function () {
            var bestEatsMap = new mapboxgl.Map(
            {
                // map generated and centered on eatery 112
                container: "map",
                    style: "mapbox://styles/mapbox/satellite-v9",
                center: topEats[0].center,
                zoom: 3
            })
            // loop through elements in topEats to generate html, markers, and popups
            topEats.forEach(function (element, index) {
                // info to be displayed in the popUp
                var content =  `<h5>${element.name}</h5>`
                    content += `<h6>${element.address}</h6>`
                    content += `<p>${element.info}</p>`
                    content += `<img src='${element.image}' width="100%" height="auto"/>`

                // generate marker with a popUP that displays content
                // then add to map
                new mapboxgl.Marker({
                    color: "royalblue",
                    draggable: false
                })
                    .setLngLat(topEats[index].center)
                    .setPopup(new mapboxgl.Popup()
                        .setHTML(content))
                    .addTo(bestEatsMap)
            })
        }, 100);

    })


    // var eatery112Marker = new mapboxgl.Marker({
    //     color: "royalblue",
    //     draggable: "false"
    // })
    //     .setLngLat(eatery112Coordinates[0], eatery112Coordinates[1])
    //     .addTo(bestEats);
})()