const express = require('express')
const router = express.Router()
const statusController = require('../../controller/shared/statusController')
const validate = require('../../middleware/zodMiddleWare')
const statusValidation = require('../../util/shared/statusValidation')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/status",validate(statusValidation),statusController.addStatus)
router.put("/status/:id",statusController.updateStatusbyId)
router.get("/status",statusController.getAllStatuses)
router.get("/status/:id",statusController.getStatusById)
router.delete("/status/:id",statusController.deleteStatusById)

module.exports = router 