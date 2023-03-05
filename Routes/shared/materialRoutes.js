const express = require('express')
const router = express.Router()
const materialController = require('../../controller/shared/materialController');


router.post("/material",materialController.CreateMaterial)
router.get("/material",materialController.GetAllMaterials)
router.get("/material/:id",materialController.GetMaterialById)
router.delete("/material/:id",materialController.deleteMaterial)
router.put("/material/:id",materialController.UpdateMaterial)

module.exports = router;
