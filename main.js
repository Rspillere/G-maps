

function initMap() {
  const latLongArt = { lat: -30.403527, lng: -56.470726 };
  var map = new google.maps.Map(mapDiv, {
    zoom: 11,
    center: latLongArt,
    mapId: '6c4a89b220a81132',
  });

  //capa de unidades
   const ctaLayer = new google.maps.KmlLayer({
     url: "http://www.google.com/maps/d/kml?mid=1WolKOWKrp2YdhMfnia0lNNYI93SYD6PV",
     map: map,
   });
   
   //capa de tuberias
   const ctaLayer2 = new google.maps.KmlLayer({
    url: "http://www.google.com/maps/d/kml?mid=1TmaGXRQbaNwj_HKd8X-uxrBNK_A",
    map: map,
  });

  const marker = new google.maps.Marker({
    position: latLongArt,
    map: map,
  });

}
window.initMap = initMap;
