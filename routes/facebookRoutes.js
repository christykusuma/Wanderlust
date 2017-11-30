
const keys = require('../config/keys');

const EventSearch = require('facebook-events-by-location-core');

// Require login to add new marker
const requireLogin = require('../config/middlewares/requireLogin');

// const accessToken = process.env.FEBL_ACCESS_TOKEN;

const accessToken = `${keys.facebookClientID}${keys.facebookClientSecret}`;

//     // Reset access token env variable
//     process.env.FEBL_ACCESS_TOKEN = "";

module.exports = (app) => {

    app.get('/api/events/:lat/:lng', requireLogin, async (req, res) => {
        
                console.log('req for events through get received');
                console.log('latitude through get', req.params.lat);
                console.log('longitude through get', req.params.lng);
        
    }); 

    // Access token response
    app.get(`/oauth/access_token?client_id=${keys.facebookClientID}&client_secret=${keys.facebookClientSecret}&grant_type=client_credentials`, (req, res) => {
        
            console.log('nested request for token', req);
            

            const es = new EventSearch();
            
                    // event search response
                    es.search({
                        "lat": req.body.latLng.lat,
                        "lng": req.body.latLng.lng,
                        // "accessToken": accessToken
                        "accessToken": req
                        }).then(function (events) {
                            console.log(JSON.stringify(events));
                        }).catch(function (error) {
                            console.error(JSON.stringify(error));
                        });  

            res.send(req);

    }); 
     
};



// app.post('/api/events', requireLogin, async (req, res) => {
    
//             console.log('req for events received', req.body.latLng);
//             console.log('latitude', req.body.latLng.lat);
//             console.log('longitude', req.body.latLng.lng);

// }); 