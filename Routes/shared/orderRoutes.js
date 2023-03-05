const express = require('express')
const router = express.Router()
const orderController = require('../../controller/shared/orderController');


router.post("/order",orderController.CreateOrder)
router.get("/order",orderController.GetAllOrders)
router.get("/order/:id",orderController.GetOrderById)
router.delete("/order/:id",orderController.deleteOrder)
router.put("/order/:id",orderController.UpdateOrder)

module.exports = router;
