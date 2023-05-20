const zod = require('zod')
const statusValidation = zod.object({
    body:zod.object({
        statusName:zod.string().min(2).max(8)
    })
})
module.exports = statusValidation