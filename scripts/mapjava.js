
    $(document).ready(function(){

      alert("DISCLAIMER: Polling locations nearest to you may not be your actual voting locations. Please check your registration form your assigned location. Hit OK to load map.");
    });

    var polldata;

    // this is where loop begins

    var markers=[];

    var map;

function polls(){
      for (var i=0; i<1201; i++){
        var latitude = polldata.data[i][19][1];
        var longitude = polldata.data[i][19][2];
        var marked = new google.maps.Marker({
          position: {lat: parseFloat(latitude), lng:parseFloat(longitude)},
          map:map
        });

        var infowindow = new google.maps.InfoWindow({
        content: contentString,

        });

        var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3>' + polldata.data[i][10] +'</h3>'+
        '<div id="bodyContent">'+
        '<p> Voter Entrance: ' + polldata.data[i][17] + ' ' +polldata.data[i][15] + ' ' + polldata.data[i][16] + '</p>' +
        '<p> Handicap Entrance: ' + polldata.data[i][18] + ' ' +polldata.data[i][15] + ' ' + polldata.data[i][16] + '</p>'
      '</div>'+
      '</div>';



        google.maps.event.addListener (marked, 'click', getInfoCallback(map, contentString));

        markers.push(marked);
      }
    }

    function getInfoCallback(map,content){
    var infowindow = new google.maps.InfoWindow({
      content: content,
      maxWidth: 150,
    });
    return function (){
      infowindow.setContent(content);
      infowindow.open(map, this);
    };
  }
  
    function initMap(){
    
      var mapDiv = document.getElementById('map');
      map = new google.maps.Map(mapDiv, {
        zoom: 14,
        center: {lat: 40.7128, lng: -74.0059}
      });

      var geocoder = new google.maps.Geocoder();

      document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });

      $.getJSON('pollingdata.json', function(data){
        polldata = data;
        polls();
      });
    }

    var homemarker;

      function geocodeAddress(geocoder, resultsMap) {

        var address = document.getElementById('address').value;
        var image1 = "assets/house.png";
        geocoder.geocode({'address': address}, function(results, status) {

          if(typeof homemarker != 'undefined'){
            homemarker.setMap(null);
          }

          if (status === 'OK') {

            resultsMap.setCenter(results[0].geometry.location);
            homemarker = new google.maps.Marker({
              map: resultsMap,
              icon: image1,
              position: results[0].geometry.location,
            });

            //homemarker.setMap(null);
          } 
          else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }