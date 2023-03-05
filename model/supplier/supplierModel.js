const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const supplierSchema = new Schema(
  {
    supplierName: {
      type: String,
      // required: true,
    },
    roleId: {
      type: Schema.Types.ObjectId,
      ref: "roles",
    },
    gstNo: {
      type: Number,
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
module.exports = mongoose.model("suppliers", supplierSchema);
