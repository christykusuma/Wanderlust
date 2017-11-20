import React, { Component } from 'react'

import CityList from '../containers/city-list';
import MapMarkers from './MapMarkers';
import CityDetail from '../containers/city-detail';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { geolocated, geoPropTypes } from 'react-geolocated';

class GoogleMapSearch extends Component {
	constructor(props) {
		super(props)

		// Initial state is New York
		// this.handleFormSubmit = this.handleFormSubmit.bind(this);

		this.state = { 
			address: 'New York, NY',
			latLng: {lat: 40.7127753, lng: -74.0059728}
		}

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

				<MapMarkers latLng={this.state.latLng}
				  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnSX39_1W3g7CZeeUxtomW6QePOAXzePk"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `400px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}

export default GoogleMapSearch;
