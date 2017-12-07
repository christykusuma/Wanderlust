// Markers
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markerSchema = new Schema({
    name: String,
    lat: Number,
    lng: Number,
    has_been: Boolean,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('markers', markerSchema);