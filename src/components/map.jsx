import '../css/home.css';
import '../css/map.css';
import { MapContainer, TileLayer, useMap,Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
function Map() {
  
    return (
      <MapContainer className='map' center={[51.505, -0.091]} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
    );
  }
  
export default Map;
  