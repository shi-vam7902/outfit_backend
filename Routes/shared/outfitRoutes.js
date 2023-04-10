const express = require('express')
const router = express.Router()
const outfitController = require('../../controller/shared/outfitController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addoutfit",outfitController.addOutfit)
router.put("/updateoutfit/:id",outfitController.updateOutfitbyId)
router.get("/getoutfits",outfitController.getAllOutfits)
router.delete("/deleteoutfit/:id",outfitController.deleteOutfitById)

module.exports = router 