import { FETCH_MARKERS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_MARKERS:
			return action.payload.map(marker => {
                return {
                    name: marker.name,
                    latLng: {
                        lat: marker.lat,
                        lng: marker.lng
                    },
                    has_been: marker.has_been,
                    _id: marker._id
                }
            });
		default:
			return state;
    }
}
