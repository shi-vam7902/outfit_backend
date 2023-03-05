const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const colorModel = new mongoose.Schema(
    {
        colorName:{
            type:String,
            required:true
        },
        
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("color",colorModel)
