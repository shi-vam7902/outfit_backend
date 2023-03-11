const express = require("express");
const router = express.Router();
const customerFeedBackController = require("../../controller/customer/customerFeedBackController");
router.post("/feedback", customerFeedBackController.addCustomerFeedBack);
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
