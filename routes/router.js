const express = require('express')
const router = express.Router()
const controller = require('../controller/mailingController')

router.post('/mail', controller.sendMail)

module.exports = router