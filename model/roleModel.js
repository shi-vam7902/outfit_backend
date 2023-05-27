const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roleSchema = Schema(
  {
    roleName: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("role",roleSchema)