const zod = require('zod');

const occasionValidation  = zod.object({
    body: zod.object({
        occasionType: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = occasionValidation