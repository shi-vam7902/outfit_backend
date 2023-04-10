const express = require('express')
const router = express.Router()
const designerController = require('../../controller/shared/designerController')
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')


router.post("/adddesigne",designerController.addDesigner)
router.put("/updatedesigne/:id",designerController.updateDesignerbyId)
router.get("/getdesignes",designerController.getAllDesigners)
router.delete("/deletedesigne/:id",designerController.deleteDesignerById)

module.exports = router 