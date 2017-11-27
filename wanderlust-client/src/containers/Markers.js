import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";

import { connect } from 'react-redux';

import { fetchMarkers } from '../actions/index';
import { bindActionCreators } from 'redux';

class Markers extends Component {
  constructor(props) {
    super(props)
  }
  
  // Fetches markers from database
  componentDidMount() {
    this.props.fetchMarkers();
  }

  // Change icon depending on whether true or false
  markerIcon(icon) {
    if (icon) {
      return (
        "/true.png"
      );
    } else {
        return (
          "/false.png"
        );
    }
  }

  // render all the markers
  renderMarkers() {
    return this.props.markers.map((marker) => {
        return (
            <Marker 
                key={marker.name}
                position={marker.latLng}
                icon={this.markerIcon(marker.has_been)}
                onClick={this.props.onToggleOpen}
            >
            {this.props.isOpen && 
            <InfoWindow onCloseClick={this.props.onToggleOpen}>
               <p>{marker.name}</p>
            </InfoWindow>}
            </Marker>
        );
    });
  }

  // returns all the markers
  render() {
      return (
        <div>
          {this.renderMarkers()}
        </div>
      );
  }
}

function mapStateToProps(state) {
  return { markers: state.markers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {
      fetchMarkers,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(Markers);

// {this.renderMarkers()}
// {console.log("city", this.props.googleMapURL)}
// {console.log("city", this.props.latLng)}

// {marker.name}
// {marker.latLng.lat}
// {marker.latLng.lng}

    //   return this.props.markers.map((marker) => {
    //       return (
    //           <Marker 
    //               position={marker.latLng}
    //           />
    //       );
    //   });
    // withScriptjs(withGoogleMap(props => <GoogleMap
    //     zoom={15}
    //     center={this.props.latLng}  
    // >
    //     <Marker
    //         position={{ lat: -34.397, lng: 150.644 }}
    //     />
    // </GoogleMap>));

// class MapMarkers extends Component {
// 	constructor(props) {
//     super(props)

//     this.renderMarkers = this.renderMarkers.bind(this);
//   }

//   componentDidMount() {
//     this.props.fetchMarkers();
//   }

//   // render all the markers
//   renderMarkers() {
//       return (
//         withScriptjs(withGoogleMap(props => <GoogleMap
//             zoom={15}
//             center={{ lat: -34.397, lng: 150.644 }}  
//         >
//             <Marker
//                 position={{ lat: -34.397, lng: 150.644 }}
//             />
//         </GoogleMap>))
//       );
//   }

//   // render google map
//   render() {
//       return (
//         <div>
//             {this.renderMarkers()}
//         </div>
//       );
//   }
// }

