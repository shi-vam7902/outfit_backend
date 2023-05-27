const express = require('express')
const router = express.Router()
const brandController = require('../../controller/shared/brandController');
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
const validate = require('../../middleware/zodMiddleware')
const brandValidation = require('../../util/shared/brandValidationUtil')

router.post("/brand",validate(brandValidation),brandController.CreateBrand)
router.get("/brand",brandController.GetAllBrands)
router.get("/brand/:id",brandController.GetBrandById)
router.delete("/brand/:id",brandController.deleteBrand)
router.put("/brand/:id",brandController.UpdateBrand)

module.exports = router;
