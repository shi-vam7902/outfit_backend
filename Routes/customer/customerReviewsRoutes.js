const express = require('express')
const router = express.Router()
const customerReviewController = require('../../controller/customer/customerReviewController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
router.post("/addcustreview",customerReviewController.addCustomerReview)
router.put("/updatecustreview/:id",customerReviewController.updateCustomerReviewbyId)
router.get("/getfeedbacks",customerReviewController.getAllCustomerReviews)
router.delete("/deletefeedback/:id",customerReviewController.deleteCustomerReviewById)
module.exports = router 