const tokenUtil = require('../util/token/generateToken')

const tokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
     
    if (token) {
        try {
            var tokenData = tokenUtil.validateToken(token);
            if (tokenData != null || tokenData != undefined) {
                return next();
            }
            else {
                return res.status(401).json({
                    message: "You are not authorized to access this"
                });
            }
        } catch (err) {
            return res.status(401).json({
                message: "You are not authorized to access this"

            })
        }
    }
    else {
        return res.status(401).json({
            message: "You are not authorized to access this"
        })
    }
}

module.exports = {tokenMiddleware}