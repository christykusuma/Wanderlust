import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapMarkers from '../components/MapMarkers';
import MarkerList from './marker-list';

// Handles recent places
class CityDetail extends Component {
	constructor(props) {
		super(props)
    }

    render() {
        // If there is no active city
        if (!this.props.city) {
            return (
                <div>
                </div>
            );
        }

        // If there is an active city
        return (
            <div>
                <MarkerList 
                    latLng={this.props.city.latLng}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        city: state.activeCity
    };
}

export default connect(mapStateToProps)(CityDetail);


// {/* <h4>{this.props.city.name}</h4>
// <MapMarkers
//     latLng={this.props.city.latLng}
//     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnSX39_1W3g7CZeeUxtomW6QePOAXzePk"
//     loadingElement={<div style={{ height: `100%` }} />}
//     containerElement={<div style={{ height: `400px` }} />}
//     mapElement={<div style={{ height: `100%` }} />}
// />
// <br/> */}