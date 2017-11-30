import axios from 'axios';

// Calls all the dispatch function types
import { 
	FETCH_USER, 
	FETCH_CITIES, 
	FETCH_MARKERS,
	SEARCH_MARKER,
	SEARCH_EVENTS,
	SELECTED_CITY,
	SELECTED_MARKER,
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

// Grabs id from marker, then goes into backend to do database grab + yelp search
export const searchMarker = params_id => async dispatch => {
	const res = await axios.get('/api/markers/'+params_id);
	
		console.log('all the search results', res.data);
	
		dispatch({ type: SEARCH_MARKER, payload: res.data});
};

// Search events (only non-get can pass on params)
export const searchEvents = city => async dispatch => {
	console.log('search events for this city:', city);

	const res = await axios.get(`/api/events/${city.latLng.lat}/${city.latLng.lng}`);


	// const res = await axios.post('/api/events', {
	// 	...city
	// });
	
	console.log('all the event search results', res.data);
	
	dispatch({ type: SEARCH_EVENTS, payload: res.data});
};

// Fetches marker data 
export const fetchMarkers = () => async dispatch => {
	const res = await axios.get('/api/activities');

	console.log('all the markers', res);

	dispatch({ type: FETCH_MARKERS, payload: res.data});
};

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

	// Post new marker into database
	axios.post('/api/activities', {
		...marker, 
		_user: user 
	})

	// Fetches new markers
	const res = await axios.get('/api/activities');	
	
	// .then(function() {
	// 	fetchMarkers()
	// });

	console.log('all the new updated markers', res);

	dispatch({ type: FETCH_MARKERS, payload: res.data});
};

// Delete marker for the specific user
export const deleteMarker = marker => async (dispatch) => {
	
	axios.delete('/api/activities', {params: {
		_id : marker._id
	}});

	// Fetches new markers
	const res = await axios.get('/api/activities');	
	
	console.log('all the new updated markers', res);

	dispatch({ type: FETCH_MARKERS, payload: res.data});
};

// Update marker for the specific user
export const updateMarker = marker => async (dispatch, getState) => {

	console.log('current marker', marker);

	// Passes default values and changed has_been value

	axios.put('/api/activities', {
		...marker, 
		has_been: true
	});

	// Fetches new markers
	const res = await axios.get('/api/activities');	
	
	console.log('all the new updated markers', res);

	dispatch({ type: FETCH_MARKERS, payload: res.data});
};

// Undo update marker for the specific user
export const undoMarker = marker => async (dispatch, getState) => {
	
		console.log('current marker', marker);
	
		// Passes default values and changed has_been value
	
		axios.put('/api/activities/undo', {
			...marker, 
			has_been: false
		});

		// Fetches new markers
		const res = await axios.get('/api/activities');	

		console.log('all the new updated markers', res);

		dispatch({ type: FETCH_MARKERS, payload: res.data});
	};

// Shows selected city
export function selectCity(city) {
	return {
		type: SELECTED_CITY,
		payload: city
	};
};

// Shows selected marker
export function selectMarker(marker) {
	return {
		type: SELECTED_MARKER,
		payload: marker
	};
};
