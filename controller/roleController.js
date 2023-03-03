const mongoose = require("mongoose");
const schema = mongoose.Schema;
const roleSchema = schema(
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
