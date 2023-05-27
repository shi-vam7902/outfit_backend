<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const customerFeedBackController = require("../../controller/customer/customerFeedBackController");
const validate = require('../../middleware/zodMiddleWare')
const customerFeedBackValidation = require('../../util/customer/customerFeedBackValidation')
router.post("/feedback", validate.validate(customerFeedBackValidation),customerFeedBackController.addCustomerFeedBack);
router.put(
  "/feedback/:id",
  customerFeedBackController.updateCustomerFeedBackbyId
);
router.get("/feedback", customerFeedBackController.getAllCustomerFeedBacks);
router.get("/feedback/:id", customerFeedBackController.getFeedBackById);
router.delete(
  "/feedback/:id",
  customerFeedBackController.deleteCustomerFeedBackById
);
module.exports = router;
=======
const express = require('express')
const router = express.Router()
const customerFeedBackController = require('../../controller/customer/customerFeedBackController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
router.post("/addfeedback", customerFeedBackController.addCustomerFeedBack)
router.put("/updatefeedback/:id",tokenMiddleware.tokenMiddleware,customerFeedBackController.updateCustomerFeedBackbyId)
router.get("/getfeedbacks",tokenMiddleware.tokenMiddleware,customerFeedBackController.getAllCustomerFeedBacks)
router.delete("/deletefeedback/:id",tokenMiddleware.tokenMiddleware,customerFeedBackController.deleteCustomerFeedBackById)
module.exports = router 
>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
