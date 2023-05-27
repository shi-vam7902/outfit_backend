const mongoose = require('mongoose');

const schema = mongoose.Schema;

const AuthTokenModel = new schema({
    token:{
        type: String,
        required: true
    },
    user:{
        type: schema.Types.ObjectId,
        ref:'Admin',
        required: true
    },
    secret: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('AuthToken', AuthTokenModel);
