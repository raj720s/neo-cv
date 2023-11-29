"use strict"

require("dotenv").config()

const jwt = require("jsonwebtoken")
const UserModel = require("../models/user.model.js")
const passport = require("passport")
const { CLIENT_URL } = require("../configs/config.js")

/**
 * @api {post} /auth/google Create User
 * @apiName Create User
 * @apiGroup Auth
 * @param {String} email Email, required
 * @param {String} password Password, required
 * @apiSuccess {Boolean} status Status of the request.
 * @apiSuccess {String} message Message of the request.
**/

// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// router.get(
//     "/google/callback",
//     passport.authenticate("google", {
//         successRedirect: CLIENT_URL,
//         failureRedirect: "/login/failed",
//     })
// );

module.exports.google = (req, res) => {
    passport.authenticate('google', ['"profile', "email"])
}
module.exports.googleCallback = (req, res) => {
    try {

        passport.authenticate("google", {
            successRedirect: CLIENT_URL,
            failureRedirect: "/",
        })
    } catch (error) {
        console.log(error)
    }
}

/**
 * @api {post} /auth/create-user Create User
 * @apiName Create User
 * @apiGroup Auth
 * @param {String} email Email, required
 * @param {String} password Password, required
 * @apiSuccess {Boolean} status Status of the request.
 * @apiSuccess {String} message Message of the request.
**/

module.exports.createUser = (req, res) => {
    let formData = req.body
    // return console.log({ formData })
    let schema = {
        "name": "required",
        "email": "required",
        "password": "required",
    }
    // validate request
    const validateData = new node_validator.Validator(formData, schema);
    validateData.check().then(async (matched) => {
        if (!matched) return res.status(422).json({ status: false, message: 'Invalid request data', error: validateData.errors });

        try {
            // check if user already exists
            let info = {}
            info.columns = ['userID']
            info.table = 'users'
            info.where = {
                email: formData.email
            }

            let userExistsCheck = await UserModel.findOne({ where: info.where, attributes: info.columns })

            if (!helper.isEmpty(userExistsCheck)) return res.status(409).json({ status: false, message: msgHelper.msg('MSG004') });

            // insert user
            let currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
            let info2 = {}
            info2.data = {
                email: formData.email,
                phone: formData.phone,
                userName: formData.name || (formData.email).split('@')[0],
                password: helper.encrypt(formData.password),
                createdAt: currentTime,
                updatedAt: currentTime
            }

            let userInsert = await UserModel.create(info2.data)

            console.log({ userInsert })

            let token = jwt.sign({ userID: userInsert.dataValues.userID, email: userInsert.dataValues.email }, process.env.SECRET_TOKEN, { expiresIn: '24h' });


            if (helper.isEmpty(userInsert)) return res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: userInsert });
            res.status(201).json({ status: true, message: msgHelper.msg('MSG008'), token: token });
        } catch (error) {
            console.log({ ms: error.message })
            res.status(500).json({ status: false, message: error?.message || msgHelper.msg('MSG002'), error: error.message });
        }
    })

}

/**
 * @api {post} /auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @param {String} email Email, required
 * @param {String} password Password, required
 * @apiSuccess {Boolean} status Status of the request.
 * @apiSuccess {String} message Message of the request.
**/

module.exports.login = (req, res) => {
    let formData = req.body
    let schema = {
        "email": "required",
        "password": "required",
    }

    // validate request
    const validateData = new node_validator.Validator(formData, schema);
    validateData.check().then(async (matched) => {
        if (!matched) return res.status(422).json({ status: false, message: 'Invalid request data', error: validateData.errors });

        try {
            // check if user exists
            let info = {}
            info.columns = ['userID', 'email', 'password']
            info.table = 'users'
            info.where = { email: formData.email }

            let userExistCheck = await UserModel.findOne({ where: info.where, attributes: info.columns })

            if (helper.isEmpty(userExistCheck)) return res.status(404).json({ status: false, message: msgHelper.msg('MSG006') });

            // check password
            if (helper.decrypt(userExistCheck.dataValues.password) !== formData.password) return res.status(401).json({ status: false, message: msgHelper.msg('MSG007') });

            // generate token
            let token = jwt.sign({ userID: userExistCheck.dataValues.userID, email: userExistCheck.dataValues.email }, process.env.SECRET_TOKEN, { expiresIn: '24h' });

            res.status(200).json({ status: true, message: msgHelper.msg('MSG009'), token: token });

        } catch (error) {
            res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: error.message });
        }
    });
}

/**
 * @api {post} /auth/get-user Get User
 * @apiName Get User
 * @apiGroup Auth
 * @apiHeader {String} Authorization Authorization token
 * @apiSuccess {Boolean} status Status of the request.
 * @apiSuccess {String} message Message of the request.
**/

module.exports.getUser = async (req, res) => {

    try {
        const userData = req.authData.user

        if (helper.isEmpty(userData)) return res.status(401).json({ status: false, message: msgHelper.msg('MSG007') });

        let info = {}
        info.columns = ['userID', 'email']
        info.where = { userID: userData.userID }
        info.table = 'users'


        let userDetail = await UserModel.findOne({ where: info.where, attributes: info.columns })


        if (helper.isEmpty(userDetail)) return res.status(500).json({ status: false, message: msgHelper.msg('MSG006'), error: userDetail });

        if (helper.isEmpty(userDetail.dataValues)) return res.status(200).json({ status: false, message: msgHelper.msg('MSG006') });

        res.status(200).json({ status: true, message: msgHelper.msg('MSG011'), data: userDetail.dataValues });
    } catch (error) {
        res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: error.message });
    }
}



