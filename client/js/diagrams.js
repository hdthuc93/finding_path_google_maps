function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 10.762754, lng: 106.682732 }
    });

    for (var j = 0; j < path.length; ++j) {
        var flightPath = new google.maps.Polyline({
            path: path[j],
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(map);
    }

    for (var i = 0; i < coordinates.length; ++i) {
        var marker = new google.maps.Marker({
            position: coordinates[i],
            map: map,
        });
    }
}