function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.350140,
            lng: -6.266155
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });


    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

var locations = [
    { lat: 53.350140, lng: -6.266155 },
    { lat: 53.350230, lng: -6.261155 },
    { lat: 53.345140, lng: -6.276155 },
    { lat: 53.460140, lng: -6.268755 }
];