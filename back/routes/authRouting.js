const express = require("express")
const router = express.Router()
const path = require("path")
const passport = require('passport')
const AuthController = require("../controllers/auth.controller.js")
const { CLIENT_URL } = require("../configs/config.js")

router.post("/register", AuthController.createUser)
router.post("/login", AuthController.login)
router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL + '/user/dashboard',
        failureRedirect: "/login",
    })
);

router.get("/login", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});

// router.get("/google", AuthController.google)
// router.get("/callback", AuthController.googleCallback) // auth/callback
router.get("/get-user", helper.verifyToken, AuthController.getUser)

module.exports = router
