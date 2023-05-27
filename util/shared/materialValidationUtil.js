const zod = require('zod');

const materialValidation  = zod.object({
    body: zod.object({
        materialName: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = materialValidation