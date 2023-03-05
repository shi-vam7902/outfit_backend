const express = require('express')
const router = express.Router()
const occasionController = require('../../controller/shared/occasionController');


router.post("/occasion",occasionController.CreateOccasion)
router.get("/occasion",occasionController.GetAllOccasions)
router.get("/occasion/:id",occasionController.GetOccasionById)
router.delete("/occasion/:id",occasionController.deleteOccasion)
router.put("/occasion/:id",occasionController.UpdateOccasion)

module.exports = router;
