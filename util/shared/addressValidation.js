const zod = require("zod");
const addressValidation = zod.object({
  body: zod.object({
    city: zod.string().nonempty({ message: "City is required." }),
    state: zod.string().nonempty({ message: "State is required." }),
    // pincode: zod
      // .string()
      // .regex(/^\d{6}$/, { message: "Pincode must be a 6-digit number." }),
    // country: zod.string().nonempty({ message: "Country is required." }),
    // area: zod.string().nonempty({ message: "Area is required." }),
    // landmark: zod.string().optional(),
  }),
});
module.exports = addressValidation;
