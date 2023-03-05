const express = require('express')
const router = express.Router()
const customerFeedBackController = require('../../controller/customer/customerFeedBackController')
router.post("/addfeedback",customerFeedBackController.addCustomerFeedBack)
router.put("/updatefeedback/:id",customerFeedBackController.updateCustomerFeedBackbyId)
router.get("/getfeedbacks",customerFeedBackController.getAllCustomerFeedBacks)
router.delete("/deletefeedback/:id",customerFeedBackController.deleteCustomerFeedBackById)
module.exports = router 