const express = require('express')
const router = express.Router()
const userController = require('../../controller/customer/userController')
const tokenmiddleware = require('../../middleware/tokenMiddleware')

router.post("/user",userController.addUser)
router.put("/user/:id",tokenmiddleware.tokenMiddleware,userController.updateUserbyId)
router.get("/user",tokenmiddleware.tokenMiddleware,userController.getAllUsers)
router.delete("/user/:id",tokenmiddleware.tokenMiddleware,userController.deleteUserById)
router.get("/us/login",userController.LoginUser)


module.exports = router 