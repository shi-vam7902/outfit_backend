const express = require('express')
const router = express.Router()
const validate = require('../middleware/ZodMiddleWare')
const rolevalidation = require('../util/roleValidation')
const roleController = require('../controller/roleController')
const  tokenMiddleware  = require('../middleware/TokenMiddleWare')
router.post("/role",roleController.addrole)
router.put("/role/:id",roleController.updateRolebyId)
router.get("/role",roleController.getAllRoles)
router.get("/role/:id",roleController.getRoleById)
router.delete("/role/:id",roleController.deleteRoleById)

module.exports = router 