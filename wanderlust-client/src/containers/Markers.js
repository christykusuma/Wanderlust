import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";

import { connect } from 'react-redux';

import { fetchMarkers } from '../actions/index';
import { bindActionCreators } from 'redux';

class Markers extends Component {
	constructor(props) {
		super(props)

		// Initial state is New York
		this.state = { 
		}
	}
  
  // Fetches markers from database
  componentDidMount() {
    this.props.fetchMarkers();
  }

  // Change icon depending on whether true or false
  markerIcon(icon) {
    if (icon) {
      return (
        "/true-brown.png"
      );
    } else {
        return (
          "/false-brown.png"
        );
    }
  }

  // render all the markers
  renderMarkers() {
    return this.props.markers.map((marker) => {
        return (
            <Marker 
                id={marker.name}
                key={marker.name}
                position={marker.latLng}
                icon={this.markerIcon(marker.has_been)}
                onClick={this.props.onToggleOpen}
            >
              {this.props.isOpen && 
              <InfoWindow 
                onCloseClick={this.props.onToggleOpen}>
                <p className="info-window">{marker.name}</p>
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