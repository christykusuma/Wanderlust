const passport = require('passport');

module.exports = (app) => {
    // Direct to google login form (authenticate)
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    // Direct to google again after authentication with returned code
    // Then goes to next function (accessToken)
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/search');
        }
    );

    // Kills cookie session to logout
    app.get('/api/logout', (req, res) => {
        req.logout();

        // Show that there is no existing user
        res.redirect('/');
    });

    // Use saved cookie session to fetch id
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    // Redirect the user to Facebook for authentication.  When complete,
    // Facebook will redirect the user back to the application at
    //     /auth/facebook/callback
    app.get('/auth/facebook', passport.authenticate('facebook'));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    app.get(
        '/auth/facebook/callback', 
        passport.authenticate('facebook')
        // (req, res) => {
        //     res.redirect('/events');
        // }
    );

};