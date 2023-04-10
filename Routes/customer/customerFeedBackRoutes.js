const express = require('express')
const router = express.Router()
const customerFeedBackController = require('../../controller/customer/customerFeedBackController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
router.post("/addfeedback", customerFeedBackController.addCustomerFeedBack)
router.put("/updatefeedback/:id",tokenMiddleware.tokenMiddleware,customerFeedBackController.updateCustomerFeedBackbyId)
router.get("/getfeedbacks",tokenMiddleware.tokenMiddleware,customerFeedBackController.getAllCustomerFeedBacks)
router.delete("/deletefeedback/:id",tokenMiddleware.tokenMiddleware,customerFeedBackController.deleteCustomerFeedBackById)
module.exports = router 