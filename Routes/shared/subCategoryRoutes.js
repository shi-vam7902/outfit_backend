const express = require('express')
const router = express.Router()
const subCategoryController = require('../../controller/shared/subCategoryController')
router.post("/subcat",subCategoryController.addSubCategory)
router.put("/subcat/:id",subCategoryController.updateSubCategorybyId)
router.get("/subcat",subCategoryController.getAllSubCategories)
router.get("/subcat/:id",subCategoryController.getAllSubCategoriesById)
router.delete("/subcat/:id",subCategoryController.deleteSubCategoryById)
module.exports = router 