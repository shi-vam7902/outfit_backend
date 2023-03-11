const zod = require('zod');

const AdminValidation  = zod.object({
    body: zod.object({
        firstName: zod.string().min(2).max(6),
        lastName: zod.string(),
        email: zod.string().email(),
        password: zod.string(),
        role: zod.string()
    })
})

module.exports  = AdminValidation