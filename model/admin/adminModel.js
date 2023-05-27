const mongoose = require('mongoose');
const schema =  mongoose.Schema;

const AdminModel = new schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: schema.Types.ObjectId,
        ref: "role"
    },
    status:{
        type: String,
    },
    otp:{
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Admin", AdminModel);
 