import React from "react";
import { useRef  } from "react";
import { GeoJSON } from "react-leaflet";
import Map from '../components/map'
const overpass = require("query-overpass");

export default class Castles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geojson: undefined
    };
  }

  componentDidMount() {
   const position = [this.props.lat, this.props.lng];
    const query = `[out:json];(way[amenity=recycling](around:99999, ${position});\
                              relation[amenity=recycling](around:99999, ${position}););\
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
     return this.state.geojson ? <GeoJSON data={this.state.geojson}  /> : null;
  }
}
