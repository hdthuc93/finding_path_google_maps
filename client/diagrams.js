function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 10.762754, lng:  106.682732}
    });

    // var flightPlanCoordinates = [
    //     {lat: 37.772, lng: -122.214},
    //     {lat: 21.291, lng: -157.821},
    //     {lat: -18.142, lng: 178.431},
    //     {lat: -27.467, lng: 153.027}
    // ];
    for(var j = 0; j < path.length; ++j) {
        var flightPath = new google.maps.Polyline({
            path: path[j],
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(map);
    }

    for(var i = 0; i < coordinates.length; ++i) {
        var marker = new google.maps.Marker({
            position: coordinates[i],
            map: map,
        });
    }
    
     //end addListener

    // flightPath.setMap(map);
}

