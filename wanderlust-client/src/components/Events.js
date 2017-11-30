import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import selectCity function and fetchCity function
import { selectCity, fetchCities, deleteCity } from '../actions/index';

import MapMarkers from '../components/MapMarkers';

import EventSearch from '../containers/EventSearch';

import '../css/events.css';

class Events extends Component {

    componentDidMount() {
        this.props.fetchCities();
    }

    renderCities() {
        return this.props.cities.map((city) => {
            return (
                <div className="card" 
                    key={city.name} >

                    <div className="card-content"
                    onClick={() => this.props.selectCity(city)}>
                        <span className="card-title">{city.name}</span>
                    </div>
                    <div className="card-action city-buttons" >
                        <button className="update-city" onClick={this.toggleModal}>UPDATE</button>            
                        <form className="city-button" onSubmit={(event) => this.props.deleteCity(city)}>
                            <button className="delete-city">DELETE</button>
                        </form>
                    </div>
                </div>
            );
        });
    }
    
    cityListRender() {
        return (
            <div>
                <h4>Saved cities:</h4>
                {this.renderCities()}
            </div>
        )        
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
                < EventSearch city={this.props.city} />
            </div>
        );
	}
	
	render() {
		return (
			<div className="dashboard">
				<div className="left-col">
                    {this.cityListRender()}
                </div>
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
        cities: state.cities,
		city: state.activeCity,
    };
}

// Anything returned from this function will end up as props on the MarkerList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCity is called, result should be passed to all of our reducers
    return bindActionCreators( {
        selectCity,
        fetchCities,
        deleteCity
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);