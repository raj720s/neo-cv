const jwt = require('jsonwebtoken')

module.exports.verifyuser = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = user;
    } else {
        return res.status(400).json({ message: "Authorization required" });
    }
    next();
};
