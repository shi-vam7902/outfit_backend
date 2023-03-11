const express = require('express')
const router = express.Router()
const userController = require('../../controller/customer/userController')
router.post("/user",userController.addUser)
router.put("/user/:id",userController.updateUserbyId)
router.get("/user",userController.getAllUsers)
router.delete("/user/:id",userController.deleteUserById)
module.exports = router 