const express = require('express')
const router = express.Router()
const supplierController = require('../../controller/supplier/supplierController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const supplierValidation = require('../../util/supplier/supplierValidation')
router.post("/supplier",validate.validate(supplierValidation),supplierController.addSupplier)
router.put("/supplier/:id",supplierController.updateSupplierbyId)
router.get("/supplier",supplierController.getAllSupplier)
router.get("/supplier:/id",supplierController.getSupplierById)
router.delete("/supplier/:id",supplierController.deleteSupplierById)
=======
const tokenmiddleware = require('../../middleware/tokenMiddleware')

router.post("/addsup",supplierController.addSupplier)
router.put("/updatesup/:id",tokenmiddleware.tokenMiddleware,supplierController.updateSupplierbyId)
router.get("/getsups",tokenmiddleware.tokenMiddleware,supplierController.getAllSupplier)
router.delete("/deletesup/:id",tokenmiddleware.tokenMiddleware,supplierController.deleteSupplierById)

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 