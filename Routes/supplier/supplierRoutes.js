const express = require('express')
const router = express.Router()
const supplierController = require('../../controller/supplier/supplierController')
router.post("/addsup",supplierController.addSupplier)
router.put("/updatesup/:id",supplierController.updateSupplierbyId)
router.get("/getsups",supplierController.getAllSupplier)
router.delete("/deletesup/:id",supplierController.deleteSupplierById)
module.exports = router 