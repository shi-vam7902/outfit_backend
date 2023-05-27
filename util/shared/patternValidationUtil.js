const zod = require('zod');

const patternValidation  = zod.object({
    body: zod.object({
        patternName: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = patternValidation