const mongoose = require('mongoose')
const Schema = mongoose.Schema
const designerSchema = new Schema({
    statusId: {
        type: Schema.Types.ObjectId,
        ref: "statuses",
      },
    designerName:{
        type:String
    }
})
module.exports = mongoose.model("designers",designerSchema)