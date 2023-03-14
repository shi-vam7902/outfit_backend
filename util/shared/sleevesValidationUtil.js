const zod = require('zod');

const sleeveValidation  = zod.object({
    body: zod.object({
        sleeveType: zod.string(),
        statusId:zod.string()
    })
})

module.exports  = brandValidation