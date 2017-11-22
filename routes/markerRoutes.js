const mongoose = require('mongoose');

// Require login to add new marker
const requireLogin = require('../config/middlewares/requireLogin');

// Require the marker model
const Marker = mongoose.model('markers');

// Creates new city when post /api/dashboard is called
module.exports = (app) => {
    app.post('/api/activities', requireLogin, (req, res) => {
        const { name, lat, lng } = req.body;

        const marker = new Marker({
            name: name,
            lat: lat, 
            lng: lng,
            _user: req.user.id
        }).save();
    });

    app.get('/api/activities', requireLogin, async (req, res) => {
        const markers = await Marker.find({ _user: req.user.id });

        res.send(markers);
    });
};