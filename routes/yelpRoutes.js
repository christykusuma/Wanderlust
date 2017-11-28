const yelp = require('yelp-fusion');
const keys = require('../config/keys');

// Require login to add new marker
const requireLogin = require('../config/middlewares/requireLogin');

// Yelp keys
const clientID = keys.yelpClientID;
const clientSecret = keys.yelpClientSecret;

console.log(clientID, clientSecret, 'HI');

module.exports = (app) => {

    // Grab yelp search get request
    app.get('/api/current_marker', requireLogin, async (req, res) => {
        console.log('marker search req received', req.query);

    yelp.accessToken(clientID, clientSecret).then(response => {
        const client = yelp.client(response.jsonBody.access_token);
      
        // Yelp search and send back response
        client.search({
            term: req.query.name,
            latitude: req.query.lat,
            longitude: req.query.lng
        }).then(response => {
          console.log(response.jsonBody);
          res.send(response.jsonBody)
        });
      }).catch(e => {
        console.log(e);
      });

    });
};