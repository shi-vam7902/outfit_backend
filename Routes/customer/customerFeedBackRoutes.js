const express = require("express");
const router = express.Router();
const customerFeedBackController = require("../../controller/customer/customerFeedBackController");
const validate = require("../../middleware/zodMiddleWare");
const customerFeedBackValidation = require("../../util/customer/customerFeedBackValidation");
router.post(
  "/feedback",
  validate(customerFeedBackValidation),
  customerFeedBackController.addCustomerFeedBack
);
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
