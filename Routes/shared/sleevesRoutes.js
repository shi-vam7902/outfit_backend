const express = require('express')
const router = express.Router()
const sleeveController = require('../../controller/shared/sleevesController');


router.post("/sleeve",sleeveController.CreateSleeve)
router.get("/sleeve",sleeveController.GetAllSleeves)
router.get("/sleeve/:id",sleeveController.GetSleeveById)
router.delete("/sleeve/:id",sleeveController.deleteSleeve)
router.put("/sleeve/:id",sleeveController.UpdateSleeve)

module.exports = router;
