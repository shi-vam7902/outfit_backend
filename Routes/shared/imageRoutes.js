const express = require('express')
const router = express.Router()
const imageController = require('../../controller/shared/imageController');

const validate = require('../../middleware/ZodMiddleWare')
const imageValidation = require('../../util/shared/imageValidationUtil')
const  tokenMiddleware  = require('../../middleware/TokenMiddleWare')

router.post("/image",imageController.uploadImage)
// router.get("/brand",brandController.GetAllBrands)
 

module.exports = router;
