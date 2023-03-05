const express = require('express')
const router = express.Router()
const sizeController = require('../../controller/shared/sizeController')

router.post("/size",sizeController.createSize)
router.get("/size",sizeController.getAllSize)
router.get("/size/:id",sizeController.getSizeById)
router.delete("/size/:id",sizeController.deleteSize)
router.put("/size/:id",sizeController.updateSize)

module.exports = router;
