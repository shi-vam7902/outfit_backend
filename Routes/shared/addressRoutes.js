const express = require('express')
const router = express.Router()
const addressController = require('../../controller/shared/addressController')
router.post("/address",addressController.addAddress)
router.put("/address/:id",addressController.updateAddressbyId)
router.get("/address",addressController.getAllAddress)
router.get("/address/:id",addressController.getAddressById)
router.delete("/address/:id",addressController.deleteAddressById)
module.exports = router 