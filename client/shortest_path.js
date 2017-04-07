
function findShortestPath(start, end) {
    var nodePending = [];
    var result = [];
    // nodePending.splice(nodePending.length, 0, start);
    start.heuristic = 0;
    start.distancePrevNode = 0;
    nodePending.push(start);

    while (true) {
        var current = Object.assign({}, nodePending[0]);
        console.log(current.name + " (" + current.lat + ", " + current.lng + ")");
        if(current.lat === end.lat && current.lng === end.lng)
            break;

        result.push(nodePending.splice(0, 1)[0]);
        
        for(var i = 0; i < current.adjacentCoordinates.length; ++i) {
            var temp = findPoint(current.adjacentCoordinates[i], data);
            temp.prevNode = { lat: current.lat, lng: current.lng };
            temp.distancePrevNode = current.distancePrevNode + current.adjacentCoordinates[i].distance;
            temp.heuristic = temp.distancePrevNode + getHeuristic(temp, end);
            nodePending.push(temp);
        }
        nodePending.sort(function(first, last) { return first.heuristic - last.heuristic });
    }
    return result;
}

function findPoint(point, arr) {
    var size = arr.length;
    var result = {};

    for (var i = 0; i < size; ++i) {
        if (point.lat === arr[i].lat && point.lng === arr[i].lng) {
            result = Object.assign({}, arr[i]);
        }
    }

    return result;
}

function getHeuristic(point, endPoint) {
    return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(point.lat, point.lng),
        new google.maps.LatLng(endPoint.lat, endPoint.lng)
    );
}