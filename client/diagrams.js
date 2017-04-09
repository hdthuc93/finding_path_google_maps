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
        name: "Vong xoay Nguyen Trai - Cong Quynh",
        lat: 10.766711,
        lng: 106.688292,
        adjacentCoordinates: [
            {
                // Nguyen Trai - Tran Dinh Xu
                lat: 10.763377,
                lng: 106.687027,
                distance: 396.08396424750424
            }, {
                // Cong Quynh - Nguyen Cu Trinh
                lat: 10.764175,
                lng: 106.690722,
                distance: 387.70796214719763
            }, {
                // Nguyen Trai - Nam Quoc Cang
                lat: 10.767429,
                lng: 106.688512,
                distance: 83.46993569614955
            }, {
                // Cong Quynh - Bui Thi Xuan
                lat: 10.767548,
                lng: 106.686284,
                distance: 238.5436808556501
            }
        ]
    };

    var end = {
        name: "Vong xoay An Duong Vuong - Tran Phu",
        lat: 10.757557,
        lng: 106.674079,
        adjacentCoordinates: [
            {
                // An Duong Vuong - Huynh Man Dat
                lat: 10.758133,
                lng: 106.675759,
                distance: 194.59715544253766
            }, {
                // Tran Phu - Tran Nhan Ton (Huynh Man Dat)
                lat: 10.758844,
                lng: 106.675546,
                distance: 215.09366433238793
            }
        ]
    };

    var result = findShortestPath(start, end);

    var printNode = result[result.length - 1];

    while(printNode.lat !== start.lat && printNode.lng !== start.lng) {
        console.log(printNode.name + " (" + printNode.lat + ", " + printNode.lng + ")");
        printNode = findPoint(printNode.prevNode, result);
    }
}