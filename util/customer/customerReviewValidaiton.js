const zod = require('zod')
const customReviewValdiation = zod.object({
    body:zod.object({
        reviewByCustomer:zod.string().min(2).max(18)
    })
})
module.exports =customReviewValdiation