// Initialize the map centered around San Francisco, with zoom level 5
var myMap = L.map("map").setView([37.7749, -122.4194], 5);

// Add the tile layer (base map)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(myMap);

// Function to define color based on earthquake depth
function getColor(depth) {
  return depth > 90 ? '#ff0000' :
         depth > 70 ? '#ff6600' :
         depth > 50 ? '#ff9900' :
         depth > 30 ? '#ffcc00' :
         depth > 10 ? '#ccff33' :
                      '#00ff00';
}

// Function to define radius based on earthquake magnitude
function getRadius(magnitude) {
  return magnitude * 4; // Adjust size as per preference
}

// Fetch the earthquake data from the USGS GeoJSON feed
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
  .then(response => response.json())
  .then(data => createMap(data));

// Function to create the map with earthquake data
function createMap(data) {
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: getRadius(feature.properties.mag),
        fillColor: getColor(feature.geometry.coordinates[2]), // Depth is the third coordinate
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3>
                       <hr><p>Magnitude: ${feature.properties.mag}</p>
                       <p>Depth: ${feature.geometry.coordinates[2]} km</p>`);
    }
  }).addTo(myMap);

  // Add a legend to explain the depth color coding
  var legend = L.control({ position: 'bottomright' });

  legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'info legend'),
        depths = [0, 10, 30, 50, 70, 90],
        labels = [];

    for (var i = 0; i < depths.length; i++) {
      div.innerHTML +=
        '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
        depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
    }

    return div;
  };

  legend.addTo(myMap);
}
