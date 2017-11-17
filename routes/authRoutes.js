const passport = require('passport');

module.exports = (app) => {
    // Direct to google login form (authenticate)
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    // Direct to google again after authentication with returned code
    // Then goes to next function (accessToken)
    app.get('/auth/google/callback', passport.authenticate('google'));

    // Kills cookie session to logout
    app.get('/api/logout', (req, res) => {
        req.logout();

        // Show that there is no existing user
        res.send(req.user);
    });

    // Use saved cookie session to fetch id
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};