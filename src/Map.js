import React, { useEffect } from "react";
import "./Map.css";
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import GeoJSON from "geojson";

function Map({ data }) {
  useEffect(() => {
    const makeMap = () => {
        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;
      const accessToken =
        "pk.eyJ1IjoiYXBhZ290dG8iLCJhIjoiY2pwNzh0NjYxMW1ndDNxbnJ4Zmd0cnZ4cCJ9.-eIh1Yhfl7R1Q2rtX6lqAQ";
      const map = L.map("map").setView([45.348059363, -75.7762338651], 15);
      const geojsonData = GeoJSON.parse(data,{Point:['Y','X']})
      const geojsonLayer = new L.geoJSON(geojsonData)
      geojsonLayer.addTo(map)

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" +
          accessToken,
        {
          tileSize: 512,
          zoomOffset: -1,
          attribution:
            '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(map);
    };
    makeMap();
  }, [data]);

  return <div id="map"></div>;
}

export default Map;
