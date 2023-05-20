const express = require('express')
const router = express.Router()
const authTokenController = require('../controller/auhTokenController')
router.get("/auth",authTokenController.getAuthToken)
module.exports = router