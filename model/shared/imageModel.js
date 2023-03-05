const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const imageModel = new mongoose.Schema(
    {

        
        outfitId:{
            type: Schema.Types.ObjectId,
            ref:'outfit'
        },
        imageUrl: {
            type: String,
            required: true
        },
        imageName: {
            type: String,
            required: true
        },
        imageSrc: {
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
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("image", imageModel)
