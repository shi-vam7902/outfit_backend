const express = require('express')
const router = express.Router()
const designerController = require('../../controller/shared/designerController')
const validate = require('../../middleware/ZodMiddleWare')
const designerValidation = require('../../util/shared/designerValidation')
const  tokenMiddleware  = require('../../middleware/TokenMiddleWare')

router.post("/design",validate(designerValidation),designerController.addDesigner)
router.put("/design/:id",designerController.updateDesignerbyId)
router.get("/design",designerController.getAllDesigners)
router.get("/design/:id",designerController.getDesignerById)
router.delete("/design/:id",designerController.deleteDesignerById)

module.exports = router 