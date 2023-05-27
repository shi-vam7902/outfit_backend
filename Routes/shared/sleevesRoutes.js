const express = require('express')
const router = express.Router()
const sleeveController = require('../../controller/shared/sleevesController');

const validate = require('../../middleware/zodMiddleWare')
const sleeveValidation = require('../../util/shared/sleevesValidationUtil')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/sleeve",validate(sleeveValidation),sleeveController.CreateSleeve)
router.get("/sleeve",sleeveController.GetAllSleeves)
router.get("/sleeve/:id",sleeveController.GetSleeveById)
router.delete("/sleeve/:id",sleeveController.deleteSleeve)
router.put("/sleeve/:id",sleeveController.UpdateSleeve)

module.exports = router;
