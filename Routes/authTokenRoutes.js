const express = require('express');
const router = express.Router()

const AuthTokenController = require('../controller/authTokenController')

router.get("/token/:key", AuthTokenController.GetAuthToken)

module.exports = router;