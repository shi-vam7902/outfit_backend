const express = require('express')
const router = express.Router()
const userController = require('../../controller/customer/userController')
const tokenmiddleware = require('../../middleware/TokenMiddleWare')

router.post("/user",userController.addUser)
router.put("/user/:id",userController.updateUserbyId)
router.get("/user",userController.getAllUsers)
router.delete("/user/:id",userController.deleteUserById)
router.get("/us/login",userController.LoginUser)


module.exports = router 