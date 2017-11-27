import { FETCH_USER } from '../actions/types';

// State will always be either null, user model or false
export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false; 
		default:
			return state;
	}
}