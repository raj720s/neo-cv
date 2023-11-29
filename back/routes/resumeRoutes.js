const express = require("express")
const resumerouter = express.Router()


const { saveResume, fetchResume, fetchResumeData, fetchResumeByID, editResuem } = require("../controllers/resumeController.js");
const { verifyuser } = require("../middlewares/authmidware.js");

resumerouter.post("/save-resume", verifyuser, saveResume)

resumerouter.post("/edit-resume", verifyuser, editResuem)

resumerouter.get("/fetch-user-resumes", verifyuser, fetchResume)

resumerouter.post("/fetch-user-resume", verifyuser, fetchResumeByID)


module.exports = resumerouter
