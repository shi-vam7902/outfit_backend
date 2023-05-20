const zod = require('zod')
const indianPhoneNumberRegex = /^(\+91|91)?([6-9]\d{9})$/;
const userValidation = zod.object({

    body:zod.object({
          firstName:zod.string().min(2).max(16),
          lastName:zod.string().min(2).max(16),
          emailId:zod.string().email(),
          password:zod.string().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
          phoneNo:zod.string().regex(indianPhoneNumberRegex),
          gender: zod.string().refine((value) => value === "male" || value === "female", {
            message: "Gender must be either 'male' or 'female'.",
          })

        //passoword ka validation using regex
        // Contains at least one digit
        // Contains at least one lowercase letter
        // Contains at least one uppercase letter
        // Contains only alphanumeric characters  
        // gstNo:zod.string().min(2).max(22),
        // supplierName:zod.string().min(2).max(18)
    })
})
module.exports = userValidation