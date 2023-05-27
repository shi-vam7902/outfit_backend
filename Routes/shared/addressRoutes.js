const express = require('express')
const router = express.Router()
const addressController = require('../../controller/shared/addressController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const addressValdiation = require('../../util/shared/addressValidation')
router.post("/address",validate.validate(addressValdiation),addressController.addAddress)
router.put("/address/:id",addressController.updateAddressbyId)
router.get("/address",addressController.getAllAddress)
router.get("/address/:id",addressController.getAddressById)
router.delete("/address/:id",addressController.deleteAddressById)
=======
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')
 
router.post("/add",addressController.addAddress)
router.put("/updateadd/:id",addressController.updateAddressbyId)
router.get("/getadds",addressController.getAllAddress)
router.delete("/deleteadd/:id",addressController.deleteAddressById)
>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 