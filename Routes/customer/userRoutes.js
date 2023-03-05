const express = require('express')
const router = express.Router()
const userController = require('../../controller/customer/userController')
router.post("/adduser",userController.addUser)
router.put("/updateuser/:id",userController.updateUserbyId)
router.get("/getusers",userController.getAllUsers)
router.delete("/deleteuser/:id",userController.deleteUserById)
module.exports = router 