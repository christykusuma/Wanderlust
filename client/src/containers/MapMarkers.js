import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { compose, withStateHandlers, withProps } from 'recompose';

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

// import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import { compose, withStateHandlers } from 'recompose';

// import Markers from '../containers/Markers';

// // Google map with markers from different component
// // Wrap in HOC
// class MapMarkers extends Component {
// 	constructor(props) {
// 		super(props)

//   }
  
//   mapRender() {
//     return (
//       compose(withStateHandlers(() => ({
//           isOpen: false,
//           }), {
//           onToggleOpen: ({ isOpen }) => () => ({
//             isOpen: !isOpen,
//           })
//         }),
//         withScriptjs,
//         withGoogleMap)(props =>
//         <GoogleMap
//           zoom={15}
//           center={this.props.latLng}>
//         < Markers 
//           onToggleOpen={props.onToggleOpen}
//           isOpen={props.isOpen}
//         />
//         </GoogleMap>)
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.mapRender()}
//       </div>
//     );
//   }
// } 

// export default MapMarkers;


// import React, { Component } from 'react';
// import { Marker, InfoWindow } from "react-google-maps";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import { compose, withStateHandlers } from 'recompose';

// import { connect } from 'react-redux';

// import { fetchMarkers } from '../actions/index';
// import { bindActionCreators } from 'redux';

// class MapMarkers extends Component {
// 	constructor(props) {
// 		super(props)

// 		// Initial state is New York
// 		this.state = { 
//     }

//     this.renderMarkers = this.renderMarkers.bind(this);
//     this.renderMap = this.renderMap.bind(this);
// 	}
  
//   // Fetches markers from database
//   componentDidMount() {
//     this.props.fetchMarkers();
//   }

//   // Change icon depending on whether true or false
//   markerIcon(icon) {
//     if (icon) {
//       return (
//         "/true.png"
//       );
//     } else {
//         return (
//           "/false.png"
//         );
//     }
//   }

//   // render all the markers
//   renderMarkers = (onToggleOpen, isOpen) => {
//     return this.props.markers.map((marker) => {
//         return (
//             <Marker 
//                 id={marker.name}
//                 key={marker.name}
//                 position={marker.latLng}
//                 icon={this.markerIcon(marker.has_been)}
//                 onClick={onToggleOpen}
//             >
//               {isOpen && 
//               <InfoWindow 
//                 onCloseClick={onToggleOpen}>
//                 <p className="info-window">{marker.name}</p>
//               </InfoWindow>}
//             </Marker>
//         );
//     });
//   }

//   renderMap() {
//     return(
//       compose(withStateHandlers(() => ({
//         isOpen: false,
//         }), {
//         onToggleOpen: ({ isOpen }) => () => ({
//           isOpen: !isOpen,
//         })
//       }),
//       withScriptjs,
//       withGoogleMap)(props =>
//       <GoogleMap
//         zoom={15}
//         center={props.latLng}>
//         {this.renderMarkers(props.onToggleOpen, props.isOpen)}
//       </GoogleMap>)
//     );
//   }

//   // returns all the markers
//   render() {
//       return (
//         <div>
//           {this.renderMap()}
//         </div>
//       );
//   }
// }

// function mapStateToProps(state) {
//   return { markers: state.markers };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( {
//       fetchMarkers,
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps )(MapMarkers);
