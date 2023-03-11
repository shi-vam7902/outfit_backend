const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema(
  {
<<<<<<< HEAD
    
=======
>>>>>>> 73009ba2cdb6f7a35bdf3fe72993adfcb012fe5c
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
