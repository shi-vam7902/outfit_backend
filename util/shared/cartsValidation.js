const zod = require('zod')
const cartsValidation = zod.object({
    body:zod.object({
        qty:zod.number().min(2).max(18),
        // price:zod.number().minValue(10000).maxValue(50000)
    })
})
module.exports = cartsValidation