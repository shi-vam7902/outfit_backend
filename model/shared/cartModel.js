const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema(
  {
<<<<<<< HEAD
=======
    
>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
    userId: 
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      subCategoryId: 
      {
        type: Schema.Types.ObjectId,
        ref: "subcategories",
      },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "outfits",
      },
    ],
    statusId: {
      type: Schema.Types.ObjectId,
      ref: "statuses",
    },
    qty:{
        type:Number
    },
    total:{
        type:Number
    }
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("carts", cartSchema);
