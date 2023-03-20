const zod = require('zod');

const styleValidation  = zod.object({
    body: zod.object({
        styleType: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = styleValidation