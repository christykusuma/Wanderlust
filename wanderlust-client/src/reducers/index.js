import { combineReducers } from 'redux';
import authReducer from './authReducer';
import citiesReducer from './citiesReducer';
import markersReducer from './markersReducer';

import searchMarkerReducer from './searchReducer';

import ActiveCity from './activeReducer';

import CityReducer from './cityReducer';
// import updateCityReducer from './cityReducer';

import MarkerReducer from './markerReducer';

// Combines all the reducers
export default combineReducers({
	auth: authReducer,
	cities: citiesReducer,
	markers: markersReducer,
	activeSearch: searchMarkerReducer,
	activeCity: ActiveCity,
	city: CityReducer,
	// updateCity: updateCityReducer,
	marker: MarkerReducer, 
});