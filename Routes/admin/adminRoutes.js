const express = require('express')
const router = express .Router();
const AdminValidation = require('../../util/AdminValidationUtil')
const validate = require('../../middleware/zodMiddleware')
const AdminController = require('../../controller/admin/adminController');



router.post("/admin",validate(AdminValidation) ,AdminController.AddAdmin);
router.get("/admin", AdminController.getAllAdmin)
router.get("/admin/:id", AdminController.getAdminById)
router.delete("/admin/:id", AdminController.deleteAdmin)
router.get("/admin/:id", AdminController.UpdateAdmin)
router.get("/admin/login", AdminController.LoginAdmin)

module.exports = router;