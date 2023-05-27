const express = require('express')
const router = express.Router()
const categoryController = require('../../controller/shared/categoryController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const categoryValidation = require('../../util/shared/categoryValidation')

router.post("/category",validate.validate(categoryValidation),categoryController.addCategory)
router.put("/category/:id",categoryController.updateCategorybyId)
router.get("/category",categoryController.getAllCategories)
router.get("/category/:id",categoryController.getCategoryById)
router.delete("/categeory/:id",categoryController.deleteCategoryById)
=======
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addcat",categoryController.addCategory)
router.put("/updatecat/:id",categoryController.updateCategorybyId)
router.get("/getcats",categoryController.getAllCategories)
router.delete("/deletecat/:id",categoryController.deleteCategoryById)

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 