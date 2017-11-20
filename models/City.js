const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = newSchema({
    name: String,
    lat: Number,
    lng: Number
});