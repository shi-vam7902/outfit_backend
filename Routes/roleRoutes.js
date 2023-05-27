const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const validate = require('../middleware/zodMiddleWare')
const rolevalidation = require('../util/roleValidation')
const roleController = require('../controller/roleController')
router.post("/role",validate.validate(rolevalidation),roleController.addrole)
router.put("/role/:id",roleController.updateRolebyId)
router.get("/role",roleController.getAllRoles)
router.get("/role/:id",roleController.getRoleById)
router.delete("/role/:id",roleController.deleteRoleById)
=======
const roleController = require('../controller/roleController')
//const  tokenMiddleware  = require('../../middleware/tokenMiddleware')

router.post("/addrole",roleController.addrole)
router.put("/updaterole/:id",roleController.updateRolebyId)
router.get("/getroles",roleController.getAllRoles)
router.delete("/deleterole/:id",roleController.deleteRoleById)

>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
module.exports = router 