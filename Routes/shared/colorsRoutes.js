const express = require('express')
const router = express.Router()
const colorController = require('../../controller/shared/colorsController');


router.post("/color",colorController.CreateColor)
router.get("/color",colorController.GetAllColors)
router.get("/color/:id",colorController.GetColorById)
router.delete("/color/:id",colorController.deleteColor)
router.put("/color/:id",colorController.UpdateColor)

module.exports = router;
