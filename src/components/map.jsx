<<<<<<< HEAD
import '../css/home.css';
import '../css/map.css';
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar';
function Map() {
    return (
      <>
          <MapContainer className='map' center={[	50.012100,20.985842]} zoom={10}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          </>
    );
  }
  
=======
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
>>>>>>> 39788b5e01a4817c1ea46a2f2383841e87dacb23
export default Map;