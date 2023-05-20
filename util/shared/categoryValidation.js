const zod = require('zod')
const CategoryValidation = zod.object({
    body:zod.object({
        CategoryName:zod.string().min(2).max(15)
    })
})
module.exports = CategoryValidation