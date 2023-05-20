const zod = require('zod')
const outfitValidation = zod.object({
    body:zod.object({
        ratings:zod.string().min(2).max(18),
        price:zod.number().positive({ message: "Price must be a positive number." }),
        ratings: zod.number().int().min(1).max(5),
        noOfDays:zod.date()
    })
})
module.exports = outfitValidation