const express = require('express')
const router = express.Router()
const materialController = require('../../controller/shared/materialController');

const validate = require('../../middleware/zodMiddleware')
const materialValidation = require('../../util/shared/materialValidationUtil')

router.post("/material",validate(materialValidation),materialController.CreateMaterial)
router.get("/material",materialController.GetAllMaterials)
router.get("/material/:id",materialController.GetMaterialById)
router.delete("/material/:id",materialController.deleteMaterial)
router.put("/material/:id",materialController.UpdateMaterial)

module.exports = router;
