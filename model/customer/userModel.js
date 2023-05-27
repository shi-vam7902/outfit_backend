const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    roleId: {
      type: Schema.Types.ObjectId,
      ref: "role",
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
    },
    phoneNo: {
      type: Number,
    },
    gender: {
      type: String,
    },
    addressId: [
      {
        type: Schema.Types.ObjectId,
        ref: "address",
      },
    ],
    statusId: {
      type: Schema.Types.ObjectId,
      ref: "statuses",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", userSchema);
