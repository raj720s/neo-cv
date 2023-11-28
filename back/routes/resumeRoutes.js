const express = require("express")
const resumerouter = express.Router()

const { CLIENT_URL } = require("../configs/config.js");
const { saveResume, fetchResume, fetchResumeData } = require("../controllers/resumeController.js");
const { verifyuser } = require("../middlewares/authmidware.js");

resumerouter.post("/save-resume", verifyuser, saveResume)

resumerouter.get("/fetch-resume", verifyuser, fetchResume)
resumerouter.post("/fetch-resume-id", verifyuser, fetchResumeData)


module.exports = resumerouter
