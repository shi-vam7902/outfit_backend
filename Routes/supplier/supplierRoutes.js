const express = require('express')
const router = express.Router()
const supplierController = require('../../controller/supplier/supplierController')
router.post("/supplier",supplierController.addSupplier)
router.put("/supplier/:id",supplierController.updateSupplierbyId)
router.get("/supplier",supplierController.getAllSupplier)
router.get("/supplier:/id",supplierController.getSupplierById)
router.delete("/supplier/:id",supplierController.deleteSupplierById)
module.exports = router 