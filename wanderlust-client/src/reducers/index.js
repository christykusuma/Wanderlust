import { combineReducers } from 'redux';
import authReducer from './authReducer';
import citiesReducer from './citiesReducer';
import markersReducer from './markersReducer';

import searchReducer from './searchReducer';

import activeReducer from './activeReducer';

// Combines all the reducers
export default combineReducers({
	auth: authReducer,
	cities: citiesReducer,
	markers: markersReducer,
	activeSearch: searchReducer,
	activeCity: activeReducer,
});