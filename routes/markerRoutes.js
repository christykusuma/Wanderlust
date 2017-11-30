const mongoose = require('mongoose');

// Require login to add new marker
const requireLogin = require('../config/middlewares/requireLogin');

// Require the marker model
const Marker = mongoose.model('markers');

// Creates new marker when post /api/dashboard is called
module.exports = (app) => {

    // Creates new marker and puts in the database
    app.post('/api/activities', requireLogin, (req, res) => {
        const { name, lat, lng } = req.body;

        const marker = new Marker({
            name: name,
            lat: lat, 
            lng: lng,
            has_been: false,
            _user: req.user.id
        }).save();

        res.send({success: true})
    });

    // Gets all the markers
    app.get('/api/activities', requireLogin, async (req, res) => {
        const markers = await Marker.find({ _user: req.user.id });

        res.send(markers);
    });

    // Delete marker from the database
    app.delete('/api/activities', requireLogin, async (req, res) => {
        console.log('req received', req.query);
        const marker = await Marker.findById( req.query._id );

        marker.remove();

        res.send({success: true})
    });

    // Update status of marker
    app.put('/api/activities/', requireLogin, async (req, res) => {
        // Find the marker
        console.log('req received', req.body);
        let marker = await Marker.findById(req.body._id);

        console.log('marker: ', marker)

        // Change has_been and save
        marker.has_been = req.body.has_been;
        marker.save();

        res.send({success: true})
    });

    // Undo update status of marker
    app.put('/api/activities/undo', requireLogin, async (req, res) => {
        // Find the marker
        console.log('req received', req.body);
        let marker = await Marker.findById(req.body._id);

        console.log('marker: ', marker)

        // Change has_been and save
        marker.has_been = req.body.has_been;
        marker.save();

        res.send({success: true})
    });
};