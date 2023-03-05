const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const brandModel = new mongoose.Schema(
    {
        brandName:{
            type:String,
            required:true
        },
       
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("brand",brandModel)
