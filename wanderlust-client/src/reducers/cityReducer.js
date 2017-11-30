import { SUBMIT_CITY } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case SUBMIT_CITY:
            return state.push(action.payload.data);
    	default:
			return state;
    }
}