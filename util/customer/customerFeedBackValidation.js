const zod = require('zod')
const customerfeedackvalidation = zod.object({
    body:zod.object({
        comments:zod.string().min(10).max(200),
        caption:zod.string().min(10).max(500),
        ratings:zod.number().min(1).max(5)
    })
})
module.exports = customerfeedackvalidation