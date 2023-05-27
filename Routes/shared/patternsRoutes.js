const express = require('express')
const router = express.Router()
const patternController = require('../../controller/shared/patternController');

const validate = require('../../middleware/ZodMiddleWare')
const patternValidation = require('../../util/shared/patternValidationUtil')
const  tokenMiddleware  = require('../../middleware/TokenMiddleWare')

router.post("/pattern",validate(patternValidation),patternController.CreatePattern)
router.get("/pattern",patternController.GetAllPatterns)
router.get("/pattern/:id",patternController.GetPatternById)
router.delete("/pattern/:id",patternController.deletePattern)
router.put("/pattern/:id",patternController.UpdatePattern)

module.exports = router;
