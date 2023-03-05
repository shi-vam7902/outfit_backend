const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const sleeveModel = new mongoose.Schema(
    {
        sleeveType:{
            type:String,
            required:true
        } 
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("sleeve",sleeveModel)
