import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Castles from "./Bins";
import 'leaflet/dist/leaflet.css';
import '../css/home.css';
import '../css/map.css';

function Map() {
    const position = [50.0874654, 14.4212535];
    return (
      <MapContainer  className='map' center={position} zoom={12}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Castles />
      </MapContainer>
    );
  
}
export default Map;