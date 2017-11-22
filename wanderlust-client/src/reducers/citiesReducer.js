// export default function() {
//     return [
//         { 
//             name: 'Boston, MA',
//             latLng: {lat: 42.360082, lng: -71.058880}
//         },
//         { 
//             name: 'New York, NY',
//             latLng: {lat: 40.7127753, lng: -74.0059728}
//         },
//         { 
//             name: 'Jakarta, Indonesia',
//             latLng: {lat: -6.175110, lng: 106.865039}
//         },
//         { 
//             name: 'London, UK',
//             latLng: {lat: 51.507351, lng: -0.127758}
//         }
//     ]
// }

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
                    }
                }
            }); 
		default:
			return state;
    }
}
