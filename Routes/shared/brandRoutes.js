const express = require('express')
const router = express.Router()
const brandController = require('../../controller/shared/brandController');


router.post("/brand",brandController.CreateBrand)
router.get("/brand",brandController.GetAllBrands)
router.get("/brand/:id",brandController.GetBrandById)
router.delete("/brand/:id",brandController.deleteBrand)
router.put("/brand/:id",brandController.UpdateBrand)

module.exports = router;
