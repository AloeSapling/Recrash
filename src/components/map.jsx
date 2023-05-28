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
  
export default Map;