const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const imageModel = new mongoose.Schema(
    {

       
        imageName: {
            type: String,
            required: true
        },
       
        imageType: {
            type: String,
            required: true
        },
        imageSize: {
            type: String,
            required: true
        },
        statusId: {
            type: Schema.Types.ObjectId,
            ref:'status'
        },
        googleDriveId:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("image", imageModel)
