const express = require('express')
const router = express.Router()
const roleController = require('../controller/RoleController')
router.post("/addrole",roleController.addrole)
router.put("/updaterole/:id",roleController.updateRolebyId)
router.get("/getroles",roleController.getAllRoles)
router.delete("/deleterole/:id",roleController.deleteRoleById)
module.exports = router 