const express = require('express')
const router = express.Router()
const cartController = require('../../controller/shared/cartController')
router.post("/cart",cartController.addCart)
router.put("/cart/:id",cartController.updateCartbyId)
router.get("/cart",cartController.getAllCarts)
router.get("/cart/:id",cartController.getCartById)
router.delete("/cart/:id",cartController.deleteCartById)
module.exports = router 