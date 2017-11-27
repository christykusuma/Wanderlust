import { combineReducers } from 'redux';
import authReducer from './authReducer';
import citiesReducer from './citiesReducer';
import markersReducer from './markersReducer';
// import infoReducer from './infoReducer';

import ActiveCity from './activeCityReducer';
// import ActiveMarker from './activeMarkerReducer';

import CityReducer from './cityReducer';
// import updateCityReducer from './cityReducer';
// import deleteCityReducer from './cityReducer';

import MarkerReducer from './markerReducer';
import updateMarkerReducer from './markerReducer';
// import deleteMarkerReducer from './markerReducer';

// Combines all the reducers
export default combineReducers({
	auth: authReducer,
	cities: citiesReducer,
	markers: markersReducer,
	// info: infoReducer,
	activeCity: ActiveCity,
	// activeMarker: ActiveMarker,
	city: CityReducer,
	// updateCity: updateCityReducer,
	// deleteCity: deleteCityReducer,
	marker: MarkerReducer, 
	updateMarker: updateMarkerReducer,
	// deleteMarker: deleteMarkerReducer
});