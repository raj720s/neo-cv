const express = require("express");
var cors = require("cors");
global.moment = require("moment");
global.node_validator = require("node-input-validator");
global.sequelize = require("./services/databaseConnection");
global.cookieParser = require('cookie-parser');
global.sql = require("mysql2");
global.helper = require("./helpers/helper");
global.msgHelper = require("./helpers/msg.js");
const logger = require('morgan');
const cookieSession = require('cookie-session');
const passport = require('passport')
const passportStrategy = require("./passport");
const bodyParser = require("body-parser");
const path = require("path");
const authRouting = require("./routes/authRouting");
const app = express();
require("dotenv").config(); //instatiate environment variables
// require('./passport.js')
const session = require('express-session')

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


/**
 * 
 * app.use(cors({
 * origin: "http://localhost:5173",
 * methods:"GET,POST,PUT,DELETE",
 * credentials: true
 * }))
 * 
 */

const CONFIG = require("./configs/config.js");
const resumerouter = require("./routes/resumeRoutes.js");

console.log("Environment:", CONFIG.ENVIRONMENT);

app.use("/api/auth/", authRouting);
app.use("/api/resume/", resumerouter);



/*  PASSPORT SETUP  */

var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));



const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = CONFIG.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = CONFIG.GOOGLE_CLIENT_SECRET;
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3500/auth/google/callback"
  , scope: ["profile", "email"],
  passReqToCallback: true
},
  function (req, accessToken, refreshToken, profile, done) {
    userProfile = profile;
    return done(null, userProfile);
  }
));


passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: CONFIG.CLIENT_URL + '/login' }),
  function (req, res) {
    // Successful authentication, redirect success.
    // res.send()
    const user = {
      email: req.user.emails[0]
    }
    console.log({ user, req })
    res.redirect(CONFIG.CLIENT_URL + '/google/success/' + user.email?.value);
  });

// return 404 if no route matched
app.use((req, res) => {
  res.status(404).json({ status: false, message: "Route not found" });
});

module.exports = app;
