import React, { Component, useState } from "react";
import {MapContainer, TileLayer, Popup, Marker, withLeaflet, useMapEvents} from "react-leaflet";
import '../css/map.css'
import { GeoJSON } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { latLng } from "leaflet";
const overpass = require("query-overpass");

// const MyMarker = props => {
//   const initMarker = ref => {
//     if (ref) {
//       ref.leafletElement.openPopup()
//     }
//   }

//   return <Marker ref={initMarker} {...props}/>
// }


// const LocationFinderDummy = () => {
//   const map = useMapEvents({
//       click(e) {
//           this.setState({currentPos})
//       },
//   });
//   return null;  
// };


function Mapa() {
  

  const [lat , setLat] = useState()
  const [lng , setLng] = useState()
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentPos: null
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

   const LocationFinderDummy = () => {
    const map = useMapEvents({
        click(e) {
            console.log(e.latlng);
            setLat(e.latlng.lat)
            setLng(e.latlng.lng)
            console.log(lat, lng)
        },
    });
    return null;  
  };
    console.log([lat,lng]);

    class Bins extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          geojson: undefined
        };
      }
    
      componentDidMount() {
        const query = ` [out:json];(way[amenity=recycling](around:99999, ${[lat , lng]});\
        relation[amenity=recycling](around:99999, ${[lat , lng]}););
        out body;>;out skel qt;`;
        
        
        const options = {
          flatProperties: true,
          overpassUrl: 'https://overpass-api.de/api/interpreter'
        };
        overpass(query, this.dataHandler, options);
      }
    
      dataHandler = (error, osmData) => {
        if (!error && osmData.features !== undefined) {
          this.setState({ geojson: osmData });
        }
      };
    
      render() {
        return this.state.geojson ? <GeoJSON data={this.state.geojson} /> : null;
      }
    }

    return (
      <div>
        <MapContainer className="map" zoom={8} center={{ lat: 51.5287718, lng: -0.2416804 }} >
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <LocationFinderDummy/>
          <Bins/>

        </MapContainer>
      </div>
    )


}


export default Mapa;
