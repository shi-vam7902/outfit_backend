const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statusSchema = Schema(
  {
    statusName: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("statuses",statusSchema)