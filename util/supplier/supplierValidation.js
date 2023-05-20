const zod = require('zod')
const supplierValidation = zod.object({
    body:zod.object({
        gstNo:zod.string().min(2).max(22),
        supplierName:zod.string().min(2).max(18)
    })
})
module.exports = supplierValidation