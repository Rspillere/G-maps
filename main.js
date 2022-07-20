let map;

/**
 * The HideLayer like the name says hide a layer
 * This constructor takes the control DIV as an argument.
 * constructor map
 */
function HideLayer(controlDiv, layer) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = `Esconder ${layer.name}`;
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    if(layer.map == null) {
      layer.setMap(map)
      controlText.innerHTML = `Esconder ${layer.name}`;
    
    }else{
      layer.setMap(null);
      controlText.innerHTML = `Mostrar ${layer.name}`;
    }
    
    console.log("se clickeo el boton");
  });
}
//---------------------------------------------

function DomHideLayer(controlDiv, layer) {

  controlDiv.addEventListener("click", () => {
    if(layer.map == null) {
      layer.setMap(map)
      controlDiv.innerHTML = `Esconder ${layer.name}`;
    
    }else{
      layer.setMap(null);
      controlDiv.innerHTML = `Mostrar ${layer.name}`;
    }
    
    console.log("se clickeo el boton");
  });
}

//------------------------------------------------

function initMap() {
  const latLongArt = { lat: -30.403527, lng: -56.470726 };
    map = new google.maps.Map(mapDiv, {
      zoom: 11,
      center: latLongArt,
      mapId: '6c4a89b220a81132',
  });

   let unidadesLayer = new google.maps.KmlLayer("http://www.google.com/maps/d/kml?mid=1WolKOWKrp2YdhMfnia0lNNYI93SYD6PV",{
    name: "Unidades",
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map,
   });
   
   let tuberiasLayer = new google.maps.KmlLayer("http://www.google.com/maps/d/kml?mid=1TmaGXRQbaNwj_HKd8X-uxrBNK_A", {
    name: "Red de abastecimiento",
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map,
  });

  const marker = new google.maps.Marker({
    position: latLongArt,
    map: map,
  });

  unidadesLayer.addListener("click", function (event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById("capture");
    testimonial.innerHTML = content;
  });

  tuberiasLayer.addListener("click", function (event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById("capture2");
    testimonial.innerHTML = content;
  });

  // Create the DIV to hold the control and call the HideLayer()
  // constructor passing in this DIV.
  const tuberiaDiv = document.createElement("div");
  const unidadesDiv = document.createElement("div");

  const button = document.getElementById("button1");

  HideLayer(tuberiaDiv, tuberiasLayer);
  HideLayer(unidadesDiv, unidadesLayer);

  DomHideLayer(button, tuberiasLayer)
  
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(tuberiaDiv);
  map.controls[google.maps.ControlPosition.RIGHT].push(unidadesDiv);


}
window.initMap = initMap;
