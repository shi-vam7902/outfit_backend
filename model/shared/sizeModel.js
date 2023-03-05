const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const sizeModel = new mongoose.Schema(
    {
        sizeType:{
            type:String,
            required:true
        },
        statusId:{
            type: Schema.Types.ObjectId,
            ref:'status'
        }
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("size",sizeModel)
