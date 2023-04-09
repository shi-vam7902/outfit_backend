const express = require('express')
const router = express.Router()
const userController = require('../../controller/customer/userController')
const tokenmiddleware = require('../../middleware/tokenMiddleware')

router.post("/adduser",userController.addUser)
router.put("/updateuser/:id",tokenmiddleware.tokenMiddleware,userController.updateUserbyId)
router.get("/getusers",tokenmiddleware.tokenMiddleware,userController.getAllUsers)
router.delete("/deleteuser/:id",tokenmiddleware.tokenMiddleware,userController.deleteUserById)
router.get("/us/login",userController.LoginUser)


module.exports = router 