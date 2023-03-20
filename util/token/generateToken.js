const jwt = require('jsonwebtoken')
const secret = "secret";

//generateToken
const generateToken = (user)=>{

        return jwt.sign({user}, secret,{
            expiresIn: "1d",
            algorithm:"HS256"
        });
};

//validate token
const validateToken = (token)=>{
    try {
        const decodedToken = jwt.verify(token, secret);
        return decodedToken;
    } catch (err) {
        return null;        
    }
};

module.exports = {generateToken,validateToken};
