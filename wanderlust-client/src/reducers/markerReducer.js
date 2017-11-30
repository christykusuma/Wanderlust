import { SUBMIT_MARKER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case SUBMIT_MARKER:
            return state.push(action.payload.data); 
        default:
			return state;
    }
}
