import axios from 'axios';
import { FETCH_USER } from './types';

// Will automatically call dispatch function
// Only after it gets a response, it will dispatch action
// export const fetchUser = () => {
// 	return function(dispatch) {
// 		axios.get('/api/current_user').then(res => dispatch({type: FETCH_USER, payload: res}));
// 	};};

// Fetches user data
export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user')
	dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches city
export function selectCity(city) {
	return {
		type: 'CITY_SELECTED',
		payload: city
	};
};
