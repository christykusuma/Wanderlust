const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Get model from mongoose (one argument)
const User = mongoose.model('users');

// Turn it into mongo id
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Turn it into a mongo instance
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// Use Google OAuth passport strategy
passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	}, (accessToken, refreshToken, profile, done) => {
		console.log('access token', accessToken);
		console.log('refresh token', refreshToken);
		console.log('profile', profile);

		User.findOne({ googleID: profile.id })
			.then((existingUser) => {
				if (existingUser) {
					// We already have a record with the given profile ID
					done(null, existingUser);
				} else {
					// Make a new record
					new User({ googleID: profile.id })
						.save()
						.then(user => done(null, user));	
				}
			});
		}
	)
);