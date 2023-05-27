const express = require('express')
const router = express.Router()
const cartController = require('../../controller/shared/cartController')
const validate= require('../../middleware/ZodMiddleWare')
const cartValidation = require('../../util/shared/cartsValidation')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
router.post("/cart",validate(cartValidation),cartController.addCart)
router.put("/cart/:id",cartController.updateCartbyId)
router.get("/cart",cartController.getAllCarts)
router.get("/cart/:id",cartController.getCartById)
router.delete("/cart/:id",cartController.deleteCartById)

module.exports = router 