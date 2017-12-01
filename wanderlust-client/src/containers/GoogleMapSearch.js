import React, { Component } from 'react'

import MapMarkers from '../components/MapMarkers';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// import { geolocated, geoPropTypes } from 'react-geolocated';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Geolocation from "react-geolocation";

import '../css/search.css';

// Import action functions
import { submitCity, submitMarker } from '../actions/index';

class GoogleMapSearch extends Component {
	constructor(props) {
		super(props)

		// Initial state is New York
		this.state = { 
			address: 'New York, NY',
			latLng: {lat: 40.7127753, lng: -74.0059728},
		}

		// Binds functions to the class component
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
	}

	// Submit city to database - calls action creator
	handleCitySubmit = (event) => {
		event.preventDefault()

		this.props.submitCity({
			name: this.state.address,
			lat: this.state.latLng.lat,
			lng: this.state.latLng.lng
		});
	}

	// Submit marker to database - calls action creator
	handleMarkerSubmit = (event) => {
		event.preventDefault()
		
		this.props.submitMarker({
			name: this.state.address,
			lat: this.state.latLng.lat,
			lng: this.state.latLng.lng
		});
	}
	
	getCurrentPosition() {
	  return (
		<Geolocation
		  onSuccess={console.log}
		  render={({
			fetchingPosition,
			position: { coords: { latitude, longitude } = {} } = {},
			error,
			getCurrentPosition
		  }) => {getCurrentPosition}}
		/>
	  );
	};

	render() {

		// New input props
		const inputProps = {
			value: this.state.address,
			onChange: this.onChange,
		}
		// const {coords: {latitude, longitude}} = this.props.location;

		return (
			<div>
				<div className="search-container">
					{this.getCurrentPosition()}
					<form onSubmit={this.handleAddressSubmit}>
						<table>
							<tr className="search-bar">
								<td><PlacesAutocomplete className="input-field" inputProps={inputProps} /></td>
								<td><button className="btn add-address waves-effect waves-light" type="submit">Submit</button></td>
							</tr>
						</table>
					</form>

					<form className="add-form" onSubmit={this.handleCitySubmit}>
						<button type="submit" className="btn add-city waves-effect waves-light" >Add City</button>
					</form>

					<form  className="add-form" onSubmit={this.handleMarkerSubmit}>
						<button type="submit" className="btn add-marker waves-effect waves-light" >Add Marker</button>
					</form>
				</div>

				<MapMarkers 
					latLng={this.state.latLng}
				  	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnSX39_1W3g7CZeeUxtomW6QePOAXzePk"
				  	loadingElement={<div style={{ height: `100%` }} />}
				  	containerElement={<div style={{ height: `735px` }} />}
				  	mapElement={<div style={{ height: `100%`}} />}
				/>
				<div className="owl-map">
					<div className='owl'>
					<div className='body'>
						<div className='wing'></div>
						<div className='wing'></div>
						<div className='feet'></div>
						<div className='feet right'></div>
						<div className='feather'></div>
					</div>
					<div className='head'>
						<div className='eyes'>
						<div className='beak'></div>
						<div className='eye'>
							<div className='pupil'></div>
						</div>
						<div className='eye'>
							<div className='pupil'></div>
						</div>
						</div>
					</div>
					</div>
				</div>				
			</div>
		);
	}
}

// Binds the dispatch functions from actions index
// Call using this.props.[function name]
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ submitCity, submitMarker }, dispatch);
}

// Connects mapDispatchToProps to the class component
export default connect(null, mapDispatchToProps)(GoogleMapSearch);