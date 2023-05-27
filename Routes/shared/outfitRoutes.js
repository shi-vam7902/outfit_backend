const express = require('express')
const router = express.Router()
const outfitController = require('../../controller/shared/outfitController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const outfitValidation = require('../../util/shared/outfitValidation')
router.post("/outfit",validate.validate(outfitValidation),outfitController.addOutfit)
router.put("/outfit/:id",outfitController.updateOutfitbyId)
router.get("/outfit",outfitController.getAllOutfits)
router.get("/outfit/:id",outfitController.getOutfitById)
router.delete("/outfit/:id",outfitController.deleteOutfitById)
=======
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addoutfit",outfitController.addOutfit)
router.put("/updateoutfit/:id",outfitController.updateOutfitbyId)
router.get("/getoutfits",outfitController.getAllOutfits)
router.delete("/deleteoutfit/:id",outfitController.deleteOutfitById)

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 