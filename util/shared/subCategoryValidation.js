const zod = require('zod')
const subCategoryValidation = zod.object({
    body:zod.object({
        subCategoryName:zod.string().min(2).max(18)
    })
})
module.exports = subCategoryValidation