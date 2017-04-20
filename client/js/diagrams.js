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

function run() {
    var start = {
        name: "Dien Bien Phu - Nguyen Thuong Hien",
        lat: 10.775949,
        lng: 106.682864,
        adjacentCoordinates: [
            {
                // Nguyen Dinh Chieu - Nguyen Thuong Hien
                lat: 10.772913,
                lng: 106.684792,
                distance: 398.33985703208776
            },
            {
                // Dien Bien Phu - CMT8
                lat: 10.776691,
                lng: 106.683692,
                distance: 122.56170478771854
            }]
    };

    var end = {
        name: "Nguyen Trai - Tran Binh Trong",
        lat: 10.758249,
        lng: 106.680756,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Tran Binh Trong
                lat: 10.759866,
                lng: 106.680087,
                distance: 194.30442810102633
            },
            {
                // Nguyen Trai - Nguyen Bieu
                lat: 10.758910,
                lng: 106.682612,
                distance: 215.9030353723206
            },
            {
                // Nguyen Trai - Le Hong Phong
                lat: 10.757257,
                lng: 106.678206,
                distance: 299.9437840620149
            },
            {
                // Tran Hung Dao - Tran Binh Trong
                lat: 10.755400,
                lng: 106.681411,
                distance: 325.1383160505475
            }]
    };

    var result = findShortestPath(start, end);
    var printNode = result[result.length - 1];
    console.log("distance: ", printNode.distancePrevNode);
    var path = [];
    path.push(end);

    while(printNode.lat !== start.lat && printNode.lng !== start.lng) {
        path.push(printNode);
        printNode = findPoint(printNode.prevNode, result);
    }
    
    path.push(start);
    path.reverse();

    for(var i = 0; i < path.length; ++i) {
        console.log(path[i].name + " (" + path[i].lat + ", " + path[i].lng + ")");
    }
}