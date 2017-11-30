const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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
	}, 

	async (accessToken, refreshToken, profile, done) => {
	const existingUser = await User.findOne({ googleID: profile.id })

		if (existingUser) {
			// We already have a record with the given profile ID
			done(null, existingUser);
		} else {
			// Make a new record
			const user = await new User({ 
				googleID: profile.id, 
				fname: profile.name.givenName, 
				lname: profile.name.familyName
			 }).save()
			done(null, user);	
		}
	})
);

passport.use(
	new FacebookStrategy({
		clientID: keys.facebookClientID,
		clientSecret: keys.facebookClientSecret,
		callbackURL: '/auth/facebook/callback',
		proxy: true
	  },

	  accessToken => {
		  console.log('access token is:', accessToken);
	  }
	)

	//   async (accessToken, refreshToken, profile, done) => {
	// 	  console.log(accessToken);
	// 	  console.log(profile);
		// const existingUser = await User.findOne({ googleID: profile.id })
	
			// if (existingUser) {
			// 	// We already have a record with the given profile ID
			// 	done(null, existingUser);
			// } else {
			// 	// Make a new record
			// 	const user = await new User({ 
			// 		googleID: profile.id, 
			// 		fname: profile.name.givenName, 
			// 		lname: profile.name.familyName
			// 	 }).save()
			// 	done(null, user);	
			// }

		// 	User.findOrCreate({ facebookId: profile.id }, function (err, user) {
		// 		return cb(err, user);
		// 	});
		// })
);


