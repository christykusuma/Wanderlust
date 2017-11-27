import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapMarkers from '../components/MapMarkers';
import MarkerList from './marker-list';

class CityDetail extends Component {

    render() {
        if (!this.props.city) {
            return <h4>Select a city to get started...</h4>
        }
        return (
            <div>
                <h4>{this.props.city.name}</h4>
                <MapMarkers
                    latLng={this.props.city.latLng}
				    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnSX39_1W3g7CZeeUxtomW6QePOAXzePk"
				    loadingElement={<div style={{ height: `100%` }} />}
				    containerElement={<div style={{ height: `400px` }} />}
				    mapElement={<div style={{ height: `100%` }} />}
				/>
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