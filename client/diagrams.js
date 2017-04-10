function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 10.762754, lng: 106.682732 }
    });

    // var flightPlanCoordinates = [
    //     {lat: 37.772, lng: -122.214},
    //     {lat: 21.291, lng: -157.821},
    //     {lat: -18.142, lng: 178.431},
    //     {lat: -27.467, lng: 153.027}
    // ];
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

function run() {
    var start = {
        name: "Nguyen Dinh Chieu - Ban Co",
        lat: 10.769103,
        lng: 106.68122,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - Nguyen Thien Thuat
                lat: 10.767866,
                lng: 106.68006,
                distance: 187.22848642508166
            },
            {
                // Nguyen Dinh Chieu - Cao Thang 
                lat: 10.770048,
                lng: 106.682098,
                distance: 142.42772657501956
            },
            {
                // Dien Bien Phu - Ban Co
                lat: 10.771895,
                lng: 106.678059,
                distance: 464.86041746977935
            }]
    };

    var end = {
        name: "Nguyen Dinh Chieu - Nguyen Thuong Hien",
        lat: 10.772913,
        lng: 106.684792,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - CMT8
                lat: 10.775019,
                lng: 106.686805,
                distance: 321.59203366312806
            },
            {
                // Dien Bien Phu - Nguyen Thuong Hien
                lat: 10.775949,
                lng: 106.682864,
                distance: 398.33985703208776
            },
            {
                // Vo Van Tan - Nguyen Thuong Hien
                lat: 10.771569,
                lng: 106.685651,
                distance: 176.65951249971653
            }]
    };

    var result = findShortestPath(start, end);

    var printNode = result[result.length - 1];

    while(printNode.lat !== start.lat && printNode.lng !== start.lng) {
        console.log(printNode.name + " (" + printNode.lat + ", " + printNode.lng + ")");
        printNode = findPoint(printNode.prevNode, result);
    }
}