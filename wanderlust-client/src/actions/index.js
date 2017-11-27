import axios from 'axios';

// Calls all the dispatch function types
import { 
	FETCH_USER, 
	FETCH_CITIES, 
	FETCH_MARKERS,
	SELECTED_CITY
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

	console.log('all the cities', res);

	dispatch({ type: FETCH_CITIES, payload: res.data});
};

// Fetches marker data 
export const fetchMarkers = () => async dispatch => {
	const res = await axios.get('/api/activities');

	console.log('all the markers', res);

	dispatch({ type: FETCH_MARKERS, payload: res.data});
};

// Fetches information from Google API

// Submits city for the specific user
export const submitCity = city => async (dispatch, getState) => {
	const user = getState().auth.id
	const res = await axios.post('/api/dashboard', {
		...city, 
		_user: user 
	});

	console.log('submitted city', res);

	dispatch({ type: FETCH_USER, payload: res.data });
};

// Update city for the specific user

// Delete city for the specific user
export const deleteCity = city => async (dispatch) => {

	console.log('current city', city);

	const res = await axios.delete('/api/dashboard', {params: {
		_id : city._id
	}});

	console.log('deleted city', res);
};

// Submits marker for the specific user
export const submitMarker = marker => async (dispatch, getState) => {
	const user = getState().auth.id
	const res = await axios.post('/api/activities', {
		...marker, 
		_user: user 
	});

	dispatch({ type: FETCH_USER, payload: res.data });
};

// Delete marker for the specific user
export const deleteMarker = marker => async (dispatch) => {
	const res = await axios.delete('/api/activities', {params: {
		_id : marker._id
	}});
};

// Update marker for the specific user
export const updateMarker = marker => async (dispatch, getState) => {
	const user = getState().auth.id

	console.log('current marker', marker);

	// Passes default values and changed has_been value

	const res = await axios.put('/api/activities', {
		...marker, 
		has_been: true
	});

	console.log('marker res', res.data);
};

// Shows selected city
export function selectCity(city) {
	return {
		type: SELECTED_CITY,
		payload: city
	};
};

// Shows selected marker
