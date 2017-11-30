const mongoose = require('mongoose');

// Require login to add new city
const requireLogin = require('../config/middlewares/requireLogin');

// Require the city model
const City = mongoose.model('cities');

// Creates new city when post /api/dashboard is called
module.exports = (app) => {
    app.post('/api/dashboard', requireLogin, (req, res) => {
        const { name, lat, lng } = req.body;

        const city = new City({
            name: name,
            lat: lat, 
            lng: lng,
            _user: req.user.id
        }).save();
    });

    app.get('/api/dashboard', requireLogin, async (req, res) => {
        const cities = await City.find({ _user: req.user.id });

        res.send(cities);
    });

    app.delete('/api/dashboard', requireLogin, async (req, res) => {
        console.log('city req received', req.query);

        const city = await City.findById( req.query._id );

        city.remove();
    });
};