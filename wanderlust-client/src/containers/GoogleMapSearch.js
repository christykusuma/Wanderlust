import React, { Component } from 'react'

import MapMarkers from '../components/MapMarkers';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { geolocated, geoPropTypes } from 'react-geolocated';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import action functions
import { submitCity, submitMarker } from '../actions/index';

class GoogleMapSearch extends Component {
	constructor(props) {
		super(props)

		// Initial state is New York
		// this.handleFormSubmit = this.handleFormSubmit.bind(this);

		this.state = { 
			address: 'New York, NY',
			latLng: {lat: 40.7127753, lng: -74.0059728}
		}

		this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
		this.handleCitySubmit = this.handleCitySubmit.bind(this);
		this.handleMarkerSubmit = this.handleMarkerSubmit.bind(this);

		// Upon change, set state to different address
		this.onChange = (address) => this.setState({ address })
	}

	// Submit address form
	handleAddressSubmit = (event) => {
		event.preventDefault()

		// Get geocode for address
		// Using geocodeByAddress and getLatLng components from PlacesAutocomplete
		geocodeByAddress(this.state.address)
			.then(results => getLatLng(results[0]))
			.then(latLng => this.setState({latLng}))
			.catch(error => console.error(error))

		console.log('Success', this.state.latLng);
	}

	// Submit city to database - calls action creator
	handleCitySubmit(event) {
		this.props.submitCity({
			name: this.state.address,
			lat: this.state.latLng.lat,
			lng: this.state.latLng.lng
		});
	}

	// Submit marker to database - calls action creator
	handleMarkerSubmit(event) {
		this.props.submitMarker({
			name: this.state.address,
			lat: this.state.latLng.lat,
			lng: this.state.latLng.lng
		});
	}

	render() {

		// New input props
		const inputProps = {
			value: this.state.address,
			onChange: this.onChange,
		}

		return (
			<div>
				<form onSubmit={this.handleAddressSubmit}>
					<table>
						<tr>
							<td><PlacesAutocomplete className="input-field col s6" inputProps={inputProps} /></td>
							<td><button className="btn waves-effect waves-light" type="submit">Submit</button></td>
						</tr>
					</table>
				</form>

				<form onSubmit={this.handleCitySubmit}>
					<button type="submit" className="btn waves-effect waves-light" >Add City</button>
				</form>

				<form onSubmit={this.handleMarkerSubmit}>
					<button type="submit" className="btn waves-effect waves-light" >Add Marker</button>
				</form>

				<MapMarkers 
					latLng={this.state.latLng}
				  	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnSX39_1W3g7CZeeUxtomW6QePOAXzePk"
				  	loadingElement={<div style={{ height: `100%` }} />}
				  	containerElement={<div style={{ height: `400px` }} />}
				  	mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ submitCity, submitMarker }, dispatch);
}
  
export default connect(null, mapDispatchToProps)(GoogleMapSearch);