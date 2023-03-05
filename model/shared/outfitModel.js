const mongoose = require('mongoose')
const Schema = mongoose.Schema
const outfitSchema = new Schema({
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: "categories",
    },
    supplierId:{
        type:Schema.Types.ObjectId,
        ref:"suppliers"
        
    },
    description:{
        type:String
    },
    brandId:{
        type: Schema.Types.ObjectId,
        ref: "brands",
    },
    sizeId:{
        type: Schema.Types.ObjectId,
        ref: "sizes",
    },
    price:{
        type:Number
    },
    ratings:{
        type:Number
    },
    designerId:{
        type: Schema.Types.ObjectId,
        ref: "designers",
    },
    statusId:{
        type: Schema.Types.ObjectId,
        ref: "statuses",
    },
    styleId:{
        type: Schema.Types.ObjectId,
        ref: "styles",
    },
    sleeveId:{
        type: Schema.Types.ObjectId,
        ref: "sleeves",
    },
    colorId:{
        type: Schema.Types.ObjectId,
        ref: "colors",
    },
    patternId:{
        type: Schema.Types.ObjectId,
        ref: "patterns",
    },
    occasionId:{
        type: Schema.Types.ObjectId,
        ref: "occasions",
    },
    materialId:{
        type: Schema.Types.ObjectId,
        ref: "materials",
    },
    noOfDays:{
        type:Date
    }
    
    
},
{
    timestamps:true
})
module.exports = mongoose.model("outfits",outfitSchema)