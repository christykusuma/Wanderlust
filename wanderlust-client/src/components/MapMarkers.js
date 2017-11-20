import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const API_KEY = 'AIzaSyBnSX39_1W3g7CZeeUxtomW6QePOAXzePk';

// Google map with marker
// Wrap in HOC
const MapMarkers = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    zoom={15}
    center={props.latLng}
  >
    <Marker
      position={props.latLng}
    />
  </GoogleMap>
));

export default MapMarkers;