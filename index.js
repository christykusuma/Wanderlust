// Import express library
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Order matters: put user model in before trying to take it out
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Use cookie session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
// Could have done:  require('../routes/authRoutes')(app);
authRoutes(app);

// Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
