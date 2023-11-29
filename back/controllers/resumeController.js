const UserResume = require("../models/userResume.model");
// const userResumeModel = require("../models/userResume.model")


/**
 * fetches all userResumes to display on the dashboard
 * /
 *  
 * */
module.exports.fetchResume = async (req, res) => {
    let formData = req.body

    const user = req.user
    // return console.log({ user, formData })
    // return console.log({ formData: formData, user: req.user })

    try {
        // check if resume already exists
        const existingUserResume = await UserResume.findAll({
            where: {
                userID: user.userID,
            },
        });
        // return console.log({ existingUserResume })
        // update fields if exist 
        // if (existingUserResume) {
        //     return res.status(201).json({ status: true, message: msgHelper.msg('MSG008'), data: existingUserResume });
        // }

        return res.status(201).json({ status: true, message: 'resumes fetched', data: existingUserResume.map(res => res.toJSON()) });


    } catch (error) {
        console.log({ error })
        res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: error.message });
    }

}

module.exports.fetchResumeByID = async (req, res) => {
    let formData = req.body
    const user = req.user
    // return console.log({ user, formData })
    // return console.log({ formData: formData, user: req.user })

    try {
        // check if resume already exists
        const userResume = await UserResume.findOne({
            where: {
                userID: user.userID,
                id: formData.id
            },
        });
        // return console.log({ userResume })
        // update fields if exist 
        if (userResume) {
            return res.status(201).json({ status: true, message: 'resume data fetched', data: userResume });
        } else {
            res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: 'resume mismathcin' });
        }



    } catch (error) {
        console.log({ error })
        res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: error.message });
    }

}


module.exports.fetchResumeData = async (req, res) => {
    let formData = req.body
    const user = req.user
    // return console.log({ user, formData })
    // return console.log({ formData: formData, user: req.user })

    try {
        // check if resume already exists
        const userResume = await UserResume.findOne({
            where: {
                userID: user.userID,
                resumeID: formData.resumeID
            },
        });
        // return console.log({ existingUserResume })
        // update fields if exist 
        // if (existingUserResume) {
        //     return res.status(201).json({ status: true, message: msgHelper.msg('MSG008'), data: existingUserResume });
        // }

        return res.status(201).json({ status: true, message: 'resumes fetched', data: userResume.toJSON() });

    } catch (error) {
        console.log({ error })
        res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: error.message });
    }

}

// creates new resume with templateID as resumeID 

module.exports.saveResume = async (req, res) => {
    let formData = req.body

    let user = req.user
    let schema = {
        "tempID": "required",
        "data": "required",

    }
    // validate request
    const validateData = new node_validator.Validator(formData, schema);

    validateData.check().then(async (matched) => {
        if (!matched) return res.status(422).json({ status: false, message: 'Invalid request data', error: validateData.errors });

        try {
            // check if resume already exists
            // const existing = await UserResume.findOne({
            //     where: {
            //         userID: user.userID,
            //         resumeID: formData.resumeID,
            //     },
            // });
            // // return console.log({ existingUserResume })
            // // update fields if exist 
            // if (existing) {
            //     await existing.update({
            //         userData: JSON.stringify(formData.data),
            //     });
            //     return res.status(201).json({ status: true, message: 'resume updated', data: existing.toJSON() });
            // } else {
            const data = {
                userID: user.userID,
                userData: formData.data,
                resumeID: formData.resumeID || formData.tempID,
            }

            let saveResume = await UserResume.create(data)

            if (saveResume) {
                return res.status(201).json({ status: true, message: 'resume  created', data: saveResume });
            }
            //     else {
            //         return res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: 'not saved' });
            //     }
            // }

        } catch (error) {
            console.log({ error })
            res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: error.message });
        }

    })

}
module.exports.editResuem = async (req, res) => {

    let formData = req.body
    // return console.log({ formData })
    let schema = {
        "resumeID": "required",
        "data": "required",
    }
    // validate request
    const validateData = new node_validator.Validator(formData, schema);
    validateData.check().then(async (matched) => {
        if (!matched) return res.status(422).json({ status: false, message: 'Invalid request data', error: validateData.errors });
        try {
            const existing = await UserResume.findOne({
                where: {
                    userID: user.userID,
                    id: formData.resumeID,
                },
            });

            // // return console.log({ existingUserResume })
            // // update fields if exist 
            if (existing) {
                await existing.update({
                    userData: JSON.stringify(formData.data),
                });
                return res.status(201).json({ status: true, message: 'resume updated', data: existing.toJSON() });
            }
        } catch (error) {
            console.log({ ms: error.message })
            res.status(500).json({ status: false, message: error?.message || msgHelper.msg('MSG002'), error: error.message });
        }
    })

}