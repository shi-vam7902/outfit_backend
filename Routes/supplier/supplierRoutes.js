const express = require('express')
const router = express.Router()
const supplierController = require('../../controller/supplier/supplierController')
const tokenmiddleware = require('../../middleware/TokenMiddleWare')

router.post("/addsup",supplierController.addSupplier)
router.put("/updatesup/:id",tokenmiddleware.tokenMiddleware,supplierController.updateSupplierbyId)
router.get("/getsups",tokenmiddleware.tokenMiddleware,supplierController.getAllSupplier)
router.delete("/deletesup/:id",tokenmiddleware.tokenMiddleware,supplierController.deleteSupplierById)

module.exports = router 