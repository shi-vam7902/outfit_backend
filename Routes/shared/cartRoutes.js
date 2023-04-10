const express = require('express')
const router = express.Router()
const cartController = require('../../controller/shared/cartController')

const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
router.post("/addcart",cartController.addCart)
router.put("/updatecart/:id",cartController.updateCartbyId)
router.get("/getcarts",cartController.getAllCarts)
router.delete("/deletecart/:id",cartController.deleteCartById)
module.exports = router 