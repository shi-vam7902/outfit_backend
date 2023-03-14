const zod = require('zod');

const sizeValidation  = zod.object({
    body: zod.object({
        sizeType: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = sizeValidation