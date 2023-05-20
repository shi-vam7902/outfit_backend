const zod = require('zod')
const designervalidation = zod.object({
    body:zod.object({
        designerName:zod.string().min(2).max(18)
    })
})
module.exports = designervalidation