const express = require('express')
const router = express.Router()
const cartController = require('../../controller/shared/cartController')
<<<<<<< HEAD
const validate= require('../../middleware/zodMiddleWare')
const cartValidation = require('../../util/shared/cartsValidation')
router.post("/cart",validate.validate(cartValidation),cartController.addCart)
router.put("/cart/:id",cartController.updateCartbyId)
router.get("/cart",cartController.getAllCarts)
router.get("/cart/:id",cartController.getCartById)
router.delete("/cart/:id",cartController.deleteCartById)
=======

const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
router.post("/addcart",cartController.addCart)
router.put("/updatecart/:id",cartController.updateCartbyId)
router.get("/getcarts",cartController.getAllCarts)
router.delete("/deletecart/:id",cartController.deleteCartById)
>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 