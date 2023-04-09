const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const generateOtpModel = new Schema({

    otp: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    validateTime: {
        type: String
    }
},
    {
        timestamps: true
    }
)
module.exports = {generateOtpModel};