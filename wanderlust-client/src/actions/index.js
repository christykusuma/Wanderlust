import axios from 'axios';
import { 
	FETCH_USER, 
	SELECTED_CITY, 
	FETCH_CITIES, 
	FETCH_MARKERS 
} from './types';

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

// Fetches city data
export const fetchCities = () => async dispatch => {
	const res = await axios.get('/api/dashboard');

	dispatch({ type: FETCH_CITIES, payload: res.data});
};

// Submits city for the specific user
export const submitCity = city => async (dispatch, getState) => {
	const user = getState().auth.id
	const res = await axios.post('/api/dashboard', {
		...city, 
		_user: user 
	});

	dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches marker data 
export const fetchMarkers= () => async dispatch => {
	const res = await axios.get('/api/activities');

	dispatch({ type: FETCH_MARKERS, payload: res.data});
};

// Submits marker for the specific user
export const submitMarker = marker => async (dispatch, getState) => {
	const user = getState().auth.id
	const res = await axios.post('/api/activities', {
		...marker, 
		_user: user 
	});

	console.log(res);

	dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches city from reducers
export function selectCity(city) {
	return {
		type: SELECTED_CITY,
		payload: city
	};
};
