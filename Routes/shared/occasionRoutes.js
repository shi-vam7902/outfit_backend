const express = require('express')
const router = express.Router()
const occasionController = require('../../controller/shared/occasionController');

const validate = require('../../middleware/ZodMiddleWare')
const occasionValidation = require('../../util/shared/occasionValidationUtil')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/occasion",validate(occasionValidation),occasionController.CreateOccasion)
router.get("/occasion",occasionController.GetAllOccasions)
router.get("/occasion/:id",occasionController.GetOccasionById)
router.delete("/occasion/:id",occasionController.deleteOccasion)
router.put("/occasion/:id",occasionController.UpdateOccasion)

module.exports = router;
