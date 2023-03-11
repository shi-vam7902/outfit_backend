const express = require('express')
const router = express.Router()
const designerController = require('../../controller/shared/designerController')
router.post("/designe",designerController.addDesigner)
router.put("/designe/:id",designerController.updateDesignerbyId)
router.get("/designe",designerController.getAllDesigners)
router.get("/designe/:id",designerController.getDesignerById)
router.delete("/designe/:id",designerController.deleteDesignerById)
module.exports = router 