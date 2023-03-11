const express = require('express')
const router = express.Router()
const outfitController = require('../../controller/shared/outfitController')
router.post("/outfit",outfitController.addOutfit)
router.put("/outfit/:id",outfitController.updateOutfitbyId)
router.get("/outfit",outfitController.getAllOutfits)
router.get("/outfit/:id",outfitController.getOutfitById)
router.delete("/outfit/:id",outfitController.deleteOutfitById)
module.exports = router 