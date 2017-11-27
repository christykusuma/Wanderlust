import { SUBMIT_MARKER, DELETE_MARKER, UPDATE_MARKER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case SUBMIT_MARKER:
            return state.push(action.payload.data); 
        case DELETE_MARKER:
            return {
                state
            }
        case UPDATE_MARKER:
            // console.log('update marker info', action.payload);
            return {
                state
                // ...state,
                // has_been: state.push(action.payload.data)
            }
    }
    return state;
}

// return {...state, data: action.payload.data}