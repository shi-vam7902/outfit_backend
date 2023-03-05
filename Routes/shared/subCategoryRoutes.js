const express = require('express')
const router = express.Router()
const subCategoryController = require('../../controller/shared/subCategoryController')
router.post("/addsubcat",subCategoryController.addSubCategory)
router.put("/updatesubcat/:id",subCategoryController.updateSubCategorybyId)
router.get("/getsubcats",subCategoryController.getAllSubCategories)
router.delete("/deletesubcats/:id",subCategoryController.deleteSubCategoryById)
module.exports = router 