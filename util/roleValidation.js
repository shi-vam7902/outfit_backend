const zod = require('zod')
const rolevalidation = zod.object({
    body:zod.object({
        roleName:zod.string().min(2).max(18)
    })
})
module.exports = rolevalidation