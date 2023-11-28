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
const cookeSession = require('cookie-session');
const passport = require('passport')
const passportStrategy = require("./passport");
const bodyParser = require("body-parser");
const path = require("path");
const authRouting = require("./routes/authRouting");
const app = express();

require("dotenv").config(); //instatiate environment variables

app.use(
  cookeSession({
    name: 'session',
    keys: ['rajkd'],
    maxAge: 24 * 60 * 60 * 100
  })
)
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
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
const { verifyToken } = require("./helpers/helper");
const resumerouter = require("./routes/resumeRoutes");

console.log("Environment:", CONFIG.ENVIRONMENT);




app.use("/api/auth/", authRouting);




app.use("/api/resume/", resumerouter);

// return 404 if no route matched
app.use((req, res) => {
  res.status(404).json({ status: false, message: "Route not found" });
});

module.exports = app;
