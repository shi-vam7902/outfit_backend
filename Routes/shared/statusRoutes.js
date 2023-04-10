const express = require('express')
const router = express.Router()
const statusController = require('../../controller/shared/statusController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addstatus",statusController.addStatus)
router.put("/updatestatus/:id",statusController.updateStatusbyId)
router.get("/getstatues",statusController.getAllStatuses)
router.delete("/deletestatus/:id",statusController.deleteStatusById)

module.exports = router 