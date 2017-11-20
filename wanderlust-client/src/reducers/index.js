import { combineReducers } from 'redux';
import authReducer from './authReducer';
import CitiesReducer from './citiesReducer';
import ActiveCity from './activeCityReducer';

// Combines all the reducers
export default combineReducers({
	auth: authReducer,
	cities: CitiesReducer,
	activeCity: ActiveCity
});