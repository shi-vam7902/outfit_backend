const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerFeedBackSchema = new Schema(
  {
    statusId: {
      type: Schema.Types.ObjectId,
      ref: "statuses",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    caption: {
      type: String,
    },
    Comment: [
      {
        type: String,
      },
    ],
    ratings: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("customerFeedBacks",customerFeedBackSchema)