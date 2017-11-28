import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { compose, withProps, withStateHandlers } from 'recompose';

import Markers from '../containers/Markers';

// Google map with markers from different component
// Wrap in HOC
const MapMarkers = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    zoom={15}
    center={props.latLng}
  >
  < Markers 
  onToggleOpen={props.onToggleOpen}
  isOpen={props.isOpen}
  />
  </GoogleMap>
);

export default MapMarkers;

