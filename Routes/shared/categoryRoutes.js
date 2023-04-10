const express = require('express')
const router = express.Router()
const categoryController = require('../../controller/shared/categoryController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addcat",categoryController.addCategory)
router.put("/updatecat/:id",categoryController.updateCategorybyId)
router.get("/getcats",categoryController.getAllCategories)
router.delete("/deletecat/:id",categoryController.deleteCategoryById)

module.exports = router 