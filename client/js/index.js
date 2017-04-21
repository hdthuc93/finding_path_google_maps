// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var lineSymbol;
var btnFind = document.getElementById("origin-input");;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        mapTypeControl: false,
        center: {
            lat: 10.763332,
            lng: 106.682474
        },
        zoom: 16
    });
    var infowindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(10.763332, 106.682474),
        map: map
    });

    lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 4,
        strokeColor: 'red'
    };
}


btnFind.addEventListener('click', function() {
    for(var i = 0; i < drivers.length; ++i) {
        findDriver(drivers[i], destination, drawPathInMap);
    }
});

function findDriver(start, end, callback) {
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

    new google.maps.Marker({
        position: new google.maps.LatLng(start.lat, start.lng),
        map: map
    });

    callback(path);
}

function drawPathInMap(resPath) {
    var prevNode = resPath[0];
    for (var i = 1; i < resPath.length; ++i) {
        var flightPath = new google.maps.Polyline({
            path: [{ lat: prevNode.lat, lng: prevNode.lng }, { lat: resPath[i].lat, lng: resPath[i].lng }],
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        flightPath.setMap(map);
        prevNode = resPath[i];
    }
    showAnimate(resPath, 0, 1)
}

function showAnimate(resPath, start, to) {
    if (to > resPath.length - 1)
        return;

    var line = new google.maps.Polyline({
        path: [{lat: resPath[start].lat, lng: resPath[start].lng}, {lat: resPath[to].lat, lng: resPath[to].lng}],
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }],
        map: map
    });

    animate(line, resPath, to);
}

function animate(line, resPath, to) {
    var count = 0;
    var myVar = window.setInterval(function() {
        if(count === 199) {
            clearInterval(myVar);
            line.set('icons', undefined);
            return showAnimate(resPath, to, to + 1);
        }

        count = (count + 1) % 200;
        var icons = line.get('icons');
        icons[0].offset = (count / 2) + '%';
        line.set('icons', icons);
    }, 10);
}