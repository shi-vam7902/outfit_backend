<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const authTokenController = require('../controller/auhTokenController')
router.get("/auth",authTokenController.getAuthToken)
module.exports = router
=======
const express = require('express');
const router = express.Router()

const AuthTokenController = require('../controller/authTokenController')

router.get("/token/:key", AuthTokenController.GetAuthToken)

module.exports = router;
>>>>>>> 3885e22d83d69fd1abb0b644c896dc4920e8b11b
