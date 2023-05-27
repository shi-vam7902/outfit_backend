const express = require('express')
const router = express.Router()
const userController = require('../../controller/customer/userController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const userValidation = require('../../util/customer/userValidation')
// router.post("/user",validate.validate(userValidation),userController.addUser)
router.post("/user",userController.addUser)
router.put("/user/:id",userController.updateUserbyId)
router.get("/user",userController.getAllUsers)
router.delete("/user/:id",userController.deleteUserById)
=======
const tokenmiddleware = require('../../middleware/tokenMiddleware')

router.post("/adduser",userController.addUser)
router.put("/updateuser/:id",tokenmiddleware.tokenMiddleware,userController.updateUserbyId)
router.get("/getusers",tokenmiddleware.tokenMiddleware,userController.getAllUsers)
router.delete("/deleteuser/:id",tokenmiddleware.tokenMiddleware,userController.deleteUserById)
router.get("/us/login",userController.LoginUser)


>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 