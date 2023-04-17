const express = require('express')
const router = express.Router();
const AdminValidation = require('../../util/admin/AdminValidationUtil')
const validate = require('../../middleware/zodMiddleware')
const AdminController = require('../../controller/admin/adminController');
const tokenMiddleware = require('../../middleware/tokenMiddleware');


router.post("/admin", validate(AdminValidation), AdminController.AddAdmin);
router.get("/admin", tokenMiddleware.tokenMiddleware, AdminController.getAllAdmin)
router.get("/admin/:id", tokenMiddleware.tokenMiddleware, AdminController.getAdminById)
router.delete("/admin/:id", tokenMiddleware.tokenMiddleware, AdminController.deleteAdmin)
router.get("/admin/:id", tokenMiddleware.tokenMiddleware, AdminController.UpdateAdmin)
router.post("/login",AdminController.LoginAdmin)
router.post("/adm/forgetPassword",AdminController.forgetPassword)
router.post("/admC/changepassword",AdminController.ChangePassword)

module.exports = router;