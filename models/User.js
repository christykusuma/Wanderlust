// Users
const mongoose = require('mongoose');
// Can be const { Schema } = mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleID: String,
    fname: String,
    lname: String
});

// Loads model into mongoose (two arguments)
mongoose.model('users', userSchema);