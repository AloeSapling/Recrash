import React, { Component, useState, useEffect } from "react";
import "../css/geosearch.css"
import {MapContainer, TileLayer, Popup, Marker, withLeaflet, useMapEvents, LayerGroup, LayersControl, useMap} from "react-leaflet";
import '../css/map.css'
import icon from "../css/LeafletCSS&IMG/icon"
import { GeoJSON } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { latLng } from "leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch"
const overpass = require("query-overpass");


function Mapa() {
  
  const mapBounds = [
    [-90, -180],
    [90, 180],
  ]

  const [lat , setLat] = useState()
  const [lng , setLng] = useState()

    

  const _created = (e) => console.log(e)
  const Search = (props) => {
    const map = useMap()

    useEffect(() => {
      const provider = new OpenStreetMapProvider()

      const searchControl = new GeoSearchControl({
        provider,
        marker: {
          icon,
        },
      })

      map.addControl(searchControl)
      return () => map.removeControl(searchControl)
    }, [props])
    return null
  }


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
        <MapContainer maxBounds={mapBounds} className="map" zoom={8} center={{ lat: 51.5287718, lng: -0.2416804 }} >
          <TileLayer
              url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
          />
          <LocationFinderDummy/>
          <Bins/>
          <LayersControl>
          <LayersControl.BaseLayer name={'mapa początkowa'} checked>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
              attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              noWrap={true}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name={'satelita'}>
            <TileLayer
              url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
              attribution="Tiles &copy Esri &mdash Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              noWrap={true}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <Search provider={new OpenStreetMapProvider()}>
          <Marker />
        </Search>
        </MapContainer>
      </div>
    )


}


export default Mapa;
