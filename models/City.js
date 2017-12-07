// Cities
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    lat: Number,
    lng: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('cities', citySchema);