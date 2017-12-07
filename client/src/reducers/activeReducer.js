import { SELECTED_CITY, SELECTED_MARKER } from '../actions/types';

// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case SELECTED_CITY:
            console.log('city selected', action.payload);
            return action.payload;
        case SELECTED_MARKER:
            console.log('marker selected', action.payload);
            return action.payload;
        default:
			return state;
    }
}