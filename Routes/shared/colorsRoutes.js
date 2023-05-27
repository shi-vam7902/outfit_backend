const express = require('express')
const router = express.Router()
const colorController = require('../../controller/shared/colorsController');

const validate = require('../../middleware/zodMiddleware')
const colorValidation = require('../../util/shared/colorValidationUtil')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/color",validate(colorValidation),colorController.CreateColor)
router.get("/color",colorController.GetAllColors)
router.get("/color/:id",colorController.GetColorById)
router.delete("/color/:id",colorController.deleteColor)
router.put("/color/:id",colorController.UpdateColor)

module.exports = router;
