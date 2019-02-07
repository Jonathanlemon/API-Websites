var map;
var button=document.getElementById("btn");
var loc;

button.addEventListener("click", function(){
	options.center.lat=32.788875+(Math.random()*0.065336);
	options.center.lng=-79.906510+(Math.random()*0.112199);
	initMap();
});

var options = {
	center: {lat: 32.800681, lng: -79.867037},
	zoom: 17
};

function initMap() {
	map = new google.maps.Map(document.getElementById('area'), options);
}