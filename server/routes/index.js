const router = require('express').Router()
const country = require('./country')

router.use('/countries', country)

module.exports = router
