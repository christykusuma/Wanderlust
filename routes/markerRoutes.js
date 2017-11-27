const mongoose = require('mongoose');

// Require login to add new marker
const requireLogin = require('../config/middlewares/requireLogin');

// Require the marker model
const Marker = mongoose.model('markers');

// Creates new marker when post /api/dashboard is called
module.exports = (app) => {
    app.post('/api/activities', requireLogin, (req, res) => {
        const { name, lat, lng } = req.body;

        const marker = new Marker({
            name: name,
            lat: lat, 
            lng: lng,
            has_been: false,
            _user: req.user.id
        }).save();
    });

    app.get('/api/activities', requireLogin, async (req, res) => {
        const markers = await Marker.find({ _user: req.user.id });

        res.send(markers);
    });

    app.put('/api/activities/', requireLogin, async (req, res) => {
        // Find the marker
        let marker = await Marker.findById({ _id: req.body.id});

        // Save into database
        marker.has_been = true;
        marker.save();

        // const markers = await Marker.
        // updateOne({
        //     _id: markerId
        // }, {
        //     $set: { 'has_been': true }
        // }).exec();
    });
};