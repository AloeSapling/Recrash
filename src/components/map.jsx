import React from "react";
import { useState, useMemo, useCallback,useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Bins from "./Bins";
import 'leaflet/dist/leaflet.css';
import { GeoJSON } from "react-leaflet";
import '../css/home.css';
import '../css/map.css';
import { render } from "@testing-library/react";
import Castles from "./Bins";


const overpass = require("query-overpass");
function Map() {
  
  const center = [50.049683,	19.944544]
  const zoom = 13
  
  function DisplayPosition({ map, propsd}) {
    const [position, setPosition] = useState(() => map.getCenter())
  
    const onClick = useCallback(() => {
      map.setView(center, zoom)
    }, [map])
  
    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  
    return (
      <p>
        latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '};
        ${ console.log(position) }
        <button onClick={onClick}>reset</button>
      </p>
    )
  }
  
  function Cords(position){
    const cords = [position.lat , position.lng]
    console.log(cords);
  }
  
  
  
  function ExternalStateExample() {
    const [map, setMap] = useState(null)
    const displayMap = useMemo(
      () => (
        <MapContainer
        className="map"
          center={center}
          zoom={zoom}
          ref={setMap}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Bins/>
        </MapContainer>
      ),
      [],
    )
        
        
    return (
      <div>
        {map ? <DisplayPosition map={map} /> : null}
        {displayMap}
      </div>
    )
  }
  render(<ExternalStateExample/>, <Castles/> )
}
export default Map;
