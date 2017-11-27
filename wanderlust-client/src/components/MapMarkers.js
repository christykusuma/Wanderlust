import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import Markers from '../containers/Markers';

// Google map with markers from different component
// Wrap in HOC
const MapMarkers = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    zoom={15}
    center={props.latLng}
  >
  < Markers />
  </GoogleMap>
));

export default MapMarkers;
