const UserResume = require("../models/userResume.model");
const userResumeModel = require("../models/userResume.model")

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
module.exports.saveResume = async (req, res) => {
    let formData = req.body
    const user = req.user
    // return console.log({ user, formData })
    // return console.log({ formData: formData, user: req.user })

    try {
        // check if resume already exists
        const existingUserResume = await UserResume.findOne({
            where: {
                userID: user.userID,
                resumeID: formData.resumeID,
            },
        });
        // update fields if exist 
        if (existingUserResume) {
            await existingUserResume.update({
                userData: JSON.stringify(formData.data),
            });
            return res.status(201).json({ status: true, message: msgHelper.msg('MSG008'), data: existingUserResume.toJSON() });
        }

        const data = {
            userID: user.userID,
            userData: formData.data,
            resumeID: formData.resumeID || '',
        }


        let saveResume = await UserResume.create(data)

        if (helper.isEmpty(saveResume)) {
            return res.status(201).json({ status: true, message: msgHelper.msg('MSG008'), data: saveResume.toJSON() });
        } else {
            return res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: 'not saved' });
        }

    } catch (error) {
        console.log({ error })
        res.status(500).json({ status: false, message: msgHelper.msg('MSG002'), error: error.message });
    }

}