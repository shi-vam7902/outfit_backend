const express = require('express')
const router = express.Router()
const subCategoryController = require('../../controller/shared/subCategoryController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const subCategoryValidation = require('../../util/shared/subCategoryValidation')

router.post("/subcat",validate.validate(subCategoryValidation),subCategoryController.addSubCategory)
router.put("/subcat/:id",subCategoryController.updateSubCategorybyId)
router.get("/subcat",subCategoryController.getAllSubCategories)
router.get("/subcat/:id",subCategoryController.getAllSubCategoriesById)
router.delete("/subcat/:id",subCategoryController.deleteSubCategoryById)
=======
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addsubcat",subCategoryController.addSubCategory)
router.put("/updatesubcat/:id",subCategoryController.updateSubCategorybyId)
router.get("/getsubcats",subCategoryController.getAllSubCategories)
router.delete("/deletesubcats/:id",subCategoryController.deleteSubCategoryById)

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 