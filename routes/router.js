const express = require('express')
const router = express.Router()
const controller = require('../controller/mailingController')

router.get('/', (req, res) => {
    res.status(200).json({message:"Success"})
})
router.post('/mail', controller.sendMail)

module.exports = router