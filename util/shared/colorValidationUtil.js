const zod = require('zod');

const colorValidation  = zod.object({
    body: zod.object({
        colorName: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = colorValidation