const express = require('express')
const router = express.Router()
const styleController = require('../../controller/shared/styleController');


router.post("/style",styleController.CreateStyle)
router.get("/style",styleController.GetAllStyles)
router.get("/style/:id",styleController.GetStyleById)
router.delete("/style/:id",styleController.deleteStyle)
router.put("/style/:id",styleController.UpdateStyle)

module.exports = router;