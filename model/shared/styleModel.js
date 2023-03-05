const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const styleModel = new mongoose.Schema(
    {
        styleType:{
            type:String,
            required:true
        } 
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("style",styleModel)
