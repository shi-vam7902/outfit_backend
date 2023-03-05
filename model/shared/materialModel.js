const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const materialModel = new mongoose.Schema(
    {
        materialName:{
            type:String,
            required:true
        }, 
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("material",materialModel)
