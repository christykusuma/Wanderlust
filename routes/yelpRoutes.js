const yelp = require('yelp-fusion');
const keys = require('../config/keys');

// Require login to add new marker
const requireLogin = require('../config/middlewares/requireLogin');

const mongoose = require('mongoose');

// Require the marker model
const Marker = mongoose.model('markers');

// Yelp keys
const clientID = keys.yelpClientID;
const clientSecret = keys.yelpClientSecret;

module.exports = (app) => {

    app.get('/api/markers/:id', requireLogin, async (req, res) => {
        // Grabs marker from database
        const marker = await Marker.findById( req.params.id );

        console.log('YELP YAY', marker);

        // Uses information to do the yelp search
        yelp.accessToken(clientID, clientSecret).then(response => {
            const client = yelp.client(response.jsonBody.access_token);
          
            // Yelp search and send back response
            client.search({
                term: marker.name,
                location: marker.name,
            }).then(response => {
              console.log(response.jsonBody);
              res.send(response.jsonBody)
            });
          }).catch(e => {
            console.log(e);
          });
    });          
}