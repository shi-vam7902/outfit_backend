const express = require('express')
const router = express.Router()
const addressController = require('../../controller/shared/addressController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
 
router.post("/add",addressController.addAddress)
router.put("/updateadd/:id",addressController.updateAddressbyId)
router.get("/getadds",addressController.getAllAddress)
router.delete("/deleteadd/:id",addressController.deleteAddressById)
module.exports = router 