const express = require('express')
const router = express.Router()
const statusController = require('../../controller/shared/statusController')
router.post("/status",statusController.addStatus)
router.put("/status/:id",statusController.updateStatusbyId)
router.get("/status",statusController.getAllStatuses)
router.get("/status/:id",statusController.getStatusById)
router.delete("/status/:id",statusController.deleteStatusById)
module.exports = router 