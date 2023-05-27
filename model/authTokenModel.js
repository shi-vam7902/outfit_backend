<<<<<<< HEAD
const mongoose = require('mongoose')
=======
const mongoose = require('mongoose');

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
const schema = mongoose.Schema;

const AuthTokenModel = new schema({
    token:{
<<<<<<< HEAD
        type:String,
        required:true
    },
    user:{
        type:schema.Types.ObjectId,
        ref:'Admin',
        required:true
    },
    secret:{
        type:String,
        required:true
    },
    publicKey:{
        type:String,
        required:true,
        unique:true
    }
},
{
    timestamps:true
})
module.exports = mongoose.model("Authtoken",AuthTokenModel)
=======
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
>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
