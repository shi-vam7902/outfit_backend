const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerReviewSchema = new Schema({
    statusId: {
            type: Schema.Types.ObjectId,
            ref: "statuses",
          },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    outfitId:{
        type: Schema.Types.ObjectId,
        ref: "outfits",
    },
    imageByCustomer:{
        type:String
    },
    reviewByCustomer:{
        type:String
    }

})
module.exports = mongoose.model("customerReviews",customerReviewSchema)