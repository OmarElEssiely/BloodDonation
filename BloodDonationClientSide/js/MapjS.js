var map;
var myLatLng;
var marker;

function initMap() {
     myLatLng = { lat: -25.363, lng: 131.044 };
    //var myLatLng;
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        zoom: 13
    });

}  //this function to intialize the map and show it

if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            myLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(myLatLng);

            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "your position"
            });
        })
} //this function to get the currenct location of user and mark it

function newLocation(newLat, newLng) {   //this function to change location
    map.setCenter({
        lat: newLat,
        lng: newLng
    });

    var lating =
    {
        latit: newLat,
        longit: newLng
    };
     marker = new google.maps.Marker({
        position: new google.maps.LatLng(newLat, newLng),
        map: map,
    })
}
//function placeMarker(location) {
//    if (marker == undefined){
//        marker = new google.maps.Marker({
//            position: new google.maps.LatLng(location),
//            map: map, 
//            animation: google.maps.Animation.DROP,
//        });
//    }
//    else{
//        marker.setPosition(location);
//    }
//    map.setCenter(location);
//}
