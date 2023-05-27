const express = require('express')
const router = express.Router()
const categoryController = require('../../controller/shared/categoryController')
const validate = require('../../middleware/zodMiddleWare')
const categoryValidation = require('../../util/shared/categoryValidation')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/category",categoryController.addCategory)
router.put("/category/:id",categoryController.updateCategorybyId)
router.get("/category",categoryController.getAllCategories)
router.get("/category/:id",categoryController.getCategoryById)
router.delete("/categeory/:id",categoryController.deleteCategoryById)

module.exports = router 