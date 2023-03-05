const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const occasionModel = new mongoose.Schema(
    {
        occasionType:{
            type:String,
            required:true
        },
        
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("occasion",occasionModel)
