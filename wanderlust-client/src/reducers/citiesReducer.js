import { FETCH_CITIES } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CITIES:
			return action.payload.map(city => {
                return {
                    name: city.name,
                    latLng: {
                        lat: city.lat,
                        lng: city.lng
                    },
                    _id: city._id
                }
            }); 
		default:
			return state;
    }
}
