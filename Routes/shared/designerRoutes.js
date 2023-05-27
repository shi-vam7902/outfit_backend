const express = require('express')
const router = express.Router()
const designerController = require('../../controller/shared/designerController')
<<<<<<< HEAD
const validate = require('../../middleware/zodMiddleWare')
const designerValidation = require('../../util/shared/designerValidation')
router.post("/designe",validate.validate(designerValidation),designerController.addDesigner)
router.put("/designe/:id",designerController.updateDesignerbyId)
router.get("/designe",designerController.getAllDesigners)
router.get("/designe/:id",designerController.getDesignerById)
router.delete("/designe/:id",designerController.deleteDesignerById)
=======
const  tokenMiddleware  = require('../../middleware/tokenMiddleware')


router.post("/adddesigne",designerController.addDesigner)
router.put("/updatedesigne/:id",designerController.updateDesignerbyId)
router.get("/getdesignes",designerController.getAllDesigners)
router.delete("/deletedesigne/:id",designerController.deleteDesignerById)

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 