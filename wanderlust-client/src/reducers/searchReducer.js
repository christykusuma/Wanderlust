import { SEARCH_MARKER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case SEARCH_MARKER:
            console.log('search marker reducer', action.payload.businesses);
            return action.payload.businesses;
    }
    return state;
}
