const express = require('express')
const router = express.Router()
const subCategoryController = require('../../controller/shared/subCategoryController')
const validate = require('../../middleware/zodMiddleWare')
const subCategoryValidation = require('../../util/shared/subCategoryValidation')

router.post("/subcat",validate.validate(subCategoryValidation),subCategoryController.addSubCategory)
router.put("/subcat/:id",subCategoryController.updateSubCategorybyId)
router.get("/subcat",subCategoryController.getAllSubCategories)
router.get("/subcat/:id",subCategoryController.getAllSubCategoriesById)
router.delete("/subcat/:id",subCategoryController.deleteSubCategoryById)
module.exports = router 