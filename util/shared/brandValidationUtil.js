const zod = require('zod');

const brandValidation  = zod.object({
    body: zod.object({
        branName: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = brandValidation