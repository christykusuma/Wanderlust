import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import action functions
import { fetchMarkers, updateMarker, deleteMarker, selectMarker } from '../actions/index';

import CityList from '../containers/city-list';

import MapMarkers from '../components/MapMarkers';

import '../css/dashboard.css';

class Activities extends Component {
	constructor(props) {
        super(props)
        
    // Bind function
    this.dist = this.dist.bind(this);
	}

	componentDidMount() {
        this.props.fetchMarkers();
    }

	// Function to calculate distance between markers
	dist = ( city, marker ) => {
		return Math.sqrt(Math.pow(city.lat - marker.latLng.lat, 2) + Math.pow(city.lng - marker.latLng.lng, 2))
	}

    // function to show done marker button
    handleMarkerDone = (marker) => {
        if (marker.has_been === false) {
        return (
            <form className="marker-form" onSubmit={(event) => this.props.updateMarker(marker)}>
                <button>DONE</button>
            </form>
        );
		}
    } 

	markerListRender() {
		return this.props.markers
		.filter( marker => this.dist( this.props.city.latLng, marker) < 3. )
		.sort((a,b) => this.dist( this.props.city.latLng, a) - this.dist( this.props.city.latLng, b))
		.map((marker) => {
			if (marker.has_been === false) {
            return (
                <div className="card marker-list" key={marker.name}>
                    <div className="card-content" onClick={() => this.props.selectMarker(marker)}>
                        <span className="card-title">{marker.name}</span>
                    </div>
                    <div className="card-action">
                        <a href={`/markers/${marker._id}`}>SEARCH</a>
                        {this.handleMarkerDone(marker)}
                        <form className="marker-form" onSubmit={(event) => this.props.deleteMarker(marker)}>
                            <button>DELETE</button>
                        </form>
                    </div>
                </div>
			);
		}
        });
	}

	cityDetailRender() {
        if (!this.props.city) {
            return (
                <div>
                    <h4>Select a city to get started...</h4>
                    <MapMarkers
                        latLng={{ lat: 40.7127753, lng: -74.0059728 }}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnSX39_1W3g7CZeeUxtomW6QePOAXzePk"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            );
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
                <br/>
                {this.markerListRender()}
            </div>
        );
	}
	
	render() {
		return (
			<div className="dashboard">
				<div className="left-col"><CityList /></div>
				<div className="right-col">
					{this.cityDetailRender()}
				</div>
				<div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
		city: state.activeCity,
		markers: state.markers 
    };
}

// Anything returned from this function will end up as props on the MarkerList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCity is called, result should be passed to all of our reducers
    return bindActionCreators( {
        selectMarker,
        fetchMarkers,
        updateMarker,
        deleteMarker
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);