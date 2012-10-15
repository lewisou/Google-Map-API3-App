var MapControl = function() {
};

MapControl.prototype = {
  initMap : function(canvasId) {
    var mapOptions = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(canvasId),
        mapOptions);
  },

  setGPS : function(lat, long) {

  },
  addMark : function() {

  },
  moveTo : function(lat, long) {

  }
};
