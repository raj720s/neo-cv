const express = require("express")
const router = express.Router()
const path = require("path")
const passport = require('passport')
const AuthController = require("../controllers/auth.controller.js")
const { CLIENT_URL } = require("../configs/config.js")

require('../passport.js')
/**
 * base  : /api/auth
 * 
 */
router.post("/register", AuthController.createUser)
router.post("/login", AuthController.login)
router.post("/user-login", AuthController.userLogin)


// router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: '/google/success',
        failureRedirect: '/google/failure'
    })
);
// // Success  
// router.get('/google/success', (req, res) => {
//     if (!req.user)
//         res.redirect('/google/failure');
//     res.send("Welcome " + req.user.email);
// });

// // failure 
// router.get('/google/callback/failure', (req, res) => {
//     res.send("Error");
// })


module.exports = router

// router.get("/get-user", helper.verifyToken, AuthController.getUser)