// Initialize and add the map
var map;
    
  // The location of Uluru
 
  // The map, centered at Uluru
  function initMao(){
  	 var location = {lat: 8.077370, lng: 5.249250};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: location});
  // The marker, positioned at Uluru
   var marker = new google.maps.Marker({position: location, map: map});
};

