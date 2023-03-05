const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    statusId: {
      type: Schema.Types.ObjectId,
      ref: "statuses",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("categories", categorySchema);
