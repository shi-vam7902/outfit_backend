const zod = require('zod');

const orderValidation  = zod.object({
    body: zod.object({
        amount: zod.number(),
        userId: zod.string(),
        cartId: zod.string(),
        payment: zod.number(),
        paymentType: zod.string(),
        paymentStatus: zod.boolean(),
        isDelivered: zod.boolean(),
        orderDate: zod.date(),
        deliveryDate: zod.date(),
        addressId: zod.string()
    })
})

module.exports  = orderValidation