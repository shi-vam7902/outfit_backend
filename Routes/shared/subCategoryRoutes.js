const express = require('express')
const router = express.Router()
const subCategoryController = require('../../controller/shared/subCategoryController')
const validate = require('../../middleware/ZodMiddleWare')
const subCategoryValidation = require('../../util/shared/subCategoryValidation')
const  tokenMiddleware  = require('../../middleware/TokenMiddleWare')

router.post("/subcat",validate(subCategoryValidation),subCategoryController.addSubCategory)
router.put("/subcat/:id",subCategoryController.updateSubCategorybyId)
router.get("/subcat",subCategoryController.getAllSubCategories)
router.get("/subcat/:id",subCategoryController.getAllSubCategoriesById)
router.delete("/subcat/:id",subCategoryController.deleteSubCategoryById)


module.exports = router 