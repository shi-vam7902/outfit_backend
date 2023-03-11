const express = require('express')
const router = express.Router()
const customerReviewController = require('../../controller/customer/customerReviewController')
router.post("/review",customerReviewController.addCustomerReview)
router.put("/review/:id",customerReviewController.updateCustomerReviewbyId)
router.get("/review",customerReviewController.getAllCustomerReviews)
router.get("/review/:id",customerReviewController.getReviewById)
router.delete("/review/:id",customerReviewController.deleteCustomerReviewById)
module.exports = router 