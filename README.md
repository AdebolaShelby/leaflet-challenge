# leaflet-challenge

# Earthquake Map Visualization
* This project visualizes real-time earthquake data from the USGS Earthquake API using the Leaflet.js library. 
* Earthquake markers are plotted on a map based on their location, with marker sizes reflecting earthquake magnitudes and marker colors representing earthquake depths.

# Project Structure
* index.html: The main HTML file containing the map container and references to external resources.
* logic.js: A JavaScript file that fetches earthquake data, plots the markers, and customizes their appearance.

# Features
* Markers:
    * Size: Reflects earthquake magnitude (larger for higher magnitude).
    * Color: Indicates earthquake depth (darker colors for deeper earthquakes).
* Popups: Display additional details about the earthquake (location, magnitude, and depth) when a marker is clicked.

* Legend: Provides context for the color coding of earthquake depth.

# Dependencies
* Leaflet.js: A lightweight, open-source JavaScript library for interactive maps.
* USGS Earthquake GeoJSON Feed: A public API providing up-to-date earthquake information.
* https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

# How It Works
* The logic.js script fetches GeoJSON data from the USGS.
* Earthquake data is displayed on a map using Leaflet, with each earthquake visualized as a circle marker.
* Marker sizes correspond to the magnitude of the earthquake, while colors correspond to the depth.
* A legend is included to explain the color scale for the depth values.

# Steps to Run the Project
* Clone or download the repository.
* Ensure both index.html and logic.js files are in the same directory.
* Open index.html in a browser.
* The map will load automatically, and earthquakes from the past week will be plotted.