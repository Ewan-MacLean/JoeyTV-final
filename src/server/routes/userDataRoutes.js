const express = require('express');

const getUserData = require('../controllers/userDataController')

const router = express.Router()

router.get('/', getUserData)

module.exports = router;