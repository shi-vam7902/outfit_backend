const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subCategorySchema = Schema(
  {
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "categories",
    },
    statusId: {
      type: Schema.Types.ObjectId,
      ref: "statuses",
    },
    subCategoryName:{
        type:String
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("subCategories", subCategorySchema);
