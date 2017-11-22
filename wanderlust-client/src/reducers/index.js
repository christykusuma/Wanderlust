import { combineReducers } from 'redux';
import authReducer from './authReducer';
import citiesReducer from './citiesReducer';
import ActiveCity from './activeCityReducer';
import CityReducer from './cityReducer';
import MarkerReducer from './markerReducer';
import markersReducer from './markersReducer';

// Combines all the reducers
export default combineReducers({
	auth: authReducer,
	cities: citiesReducer,
	activeCity: ActiveCity,
	city: CityReducer,
	marker: MarkerReducer, 
	markers: markersReducer
});