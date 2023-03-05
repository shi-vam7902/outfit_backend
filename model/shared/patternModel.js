const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const patternModel = new mongoose.Schema(
    {
        patternName:{
            type:String,
            required:true
        },
       
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("pattern",patternModel)
