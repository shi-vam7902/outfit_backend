const express = require('express')
const router = express.Router()
const roleController = require('../controller/RoleController')
router.post("/role",roleController.addrole)
router.put("/role/:id",roleController.updateRolebyId)
router.get("/role",roleController.getAllRoles)
router.get("/role/:id",roleController.getRoleById)
router.delete("/role/:id",roleController.deleteRoleById)
module.exports = router 