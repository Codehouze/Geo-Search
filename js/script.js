// Initialize and add the map
function initMap() {
  // The location of Uluru
  var location = {lat: 8.077370, lng: 5.249250};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: location});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: location, map: map});
}