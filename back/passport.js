const passport = require('passport');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./configs/config');
const GoogleStrategy = require("passport-google-oauth20").Strategy;


passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback",
            scope: ["profile", "email"],
        },
        function (accessToken, refreshToken, profile, done) {
            // done(null, profile);
            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});