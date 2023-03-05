const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const orderModel = new mongoose.Schema(
    {

        userId: {
            type: Schema.Types.ObjectId,
            ref:'user',
            required: true,
        },
        cartId: {
            type: Schema.Types.ObjectId,
            ref:'cart',
            required: true,

        },
        amount: {
            type: Number,
            required: true,

        },
        payment: {
            type: Number,
            required: true,

        },
        paymentStatus: {
            type: String,
            required: true,

        },
        isDelivered: {
            type: String,
            required: true,

        },
        orderDate: {
            type: Date,
            required: true,

        },
        deliveryDate: {
            type: Date,
            required: true,

        },
        addressId: [{
            type: Schema.Types.ObjectId,
            ref:'address',
            required: true,
        }]
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("order", orderModel)
