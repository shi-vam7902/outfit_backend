const express = require('express')
const router = express.Router()
const statusController = require('../../controller/shared/statusController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const statusValidation = require('../../util/shared/statusValidation')
router.post("/status",validate.validate(statusValidation),statusController.addStatus)
router.put("/status/:id",statusController.updateStatusbyId)
router.get("/status",statusController.getAllStatuses)
router.get("/status/:id",statusController.getStatusById)
router.delete("/status/:id",statusController.deleteStatusById)
=======
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addstatus",statusController.addStatus)
router.put("/updatestatus/:id",statusController.updateStatusbyId)
router.get("/getstatues",statusController.getAllStatuses)
router.delete("/deletestatus/:id",statusController.deleteStatusById)

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 