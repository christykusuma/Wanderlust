import { combineReducers } from 'redux';
import authReducer from './authReducer';
import citiesReducer from './citiesReducer';
import ActiveCity from './activeCityReducer';
import CityReducer from './cityReducer';

// Combines all the reducers
export default combineReducers({
	auth: authReducer,
	cities: citiesReducer,
	activeCity: ActiveCity,
	city: CityReducer
});