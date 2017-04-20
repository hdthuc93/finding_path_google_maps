
function findShortestPath(start, end) {
    var nodePending = [];
    var result = [];
    // nodePending.splice(nodePending.length, 0, start);
    start.heuristic = 0;
    start.distancePrevNode = 0;
    nodePending.push(start);

    while (true) {
        var current = Object.assign({}, nodePending[0]);
        // console.log(current.name + " (" + current.lat + ", " + current.lng + ")");
        if(current.lat === end.lat && current.lng === end.lng)
            break;

        // Remove 1st element in node pending. It's mean, node[0] is checked
        result.push(nodePending.splice(0, 1)[0]);
        
        for(var i = 0; i < current.adjacentCoordinates.length; ++i) {
            var temp = findPoint(current.adjacentCoordinates[i], data);
            var index = getIndexFromArray(temp, result);

            if(index > -1)
                continue;

            temp.prevNode = { lat: current.lat, lng: current.lng };
            temp.distancePrevNode = current.distancePrevNode + current.adjacentCoordinates[i].distance;
            temp.heuristic = getHeuristic(temp, end);
            temp.f = temp.distancePrevNode + temp.heuristic;

            index = getIndexFromArray(temp, nodePending);
            if(index > -1) {
                if(temp.distancePrevNode < nodePending[index].distancePrevNode) {
                    nodePending.splice(index, 1, temp);
                }
                continue;
            }

            nodePending.push(temp);
        }
        nodePending.sort(function(first, last) { return first.f - last.f });
    }
    return result;
}

function findPoint(point, arr) {
    var size = arr.length;
    var result = {};

    for (var i = 0; i < size; ++i) {
        if (point.lat === arr[i].lat && point.lng === arr[i].lng) {
            result = Object.assign({}, arr[i]);
            break;
        }
    }

    return result;
}

function getIndexFromArray(point, arr) {
    return arr.findIndex(function(element) {
        return ( element.lat === point.lat && element.lng === point.lng );    
    });
}


function getHeuristic(point, endPoint) {
    return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(point.lat, point.lng),
        new google.maps.LatLng(endPoint.lat, endPoint.lng)
    );
}