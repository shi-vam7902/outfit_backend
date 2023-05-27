const express = require('express')
const router = express.Router()
const customerReviewController = require('../../controller/customer/customerReviewController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const customerReviewValidation = require('../../util/customer/customerReviewValidaiton')
router.post("/review",validate.validate(customerReviewValidation),customerReviewController.addCustomerReview)
router.put("/review/:id",customerReviewController.updateCustomerReviewbyId)
router.get("/review",customerReviewController.getAllCustomerReviews)
router.get("/review/:id",customerReviewController.getReviewById)
router.delete("/review/:id",customerReviewController.deleteCustomerReviewById)
=======
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
router.post("/addcustreview",customerReviewController.addCustomerReview)
router.put("/updatecustreview/:id",customerReviewController.updateCustomerReviewbyId)
router.get("/getfeedbacks",customerReviewController.getAllCustomerReviews)
router.delete("/deletefeedback/:id",customerReviewController.deleteCustomerReviewById)
>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 