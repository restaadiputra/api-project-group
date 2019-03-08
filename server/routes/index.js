const router = require('express').Router()
const country = require('./country')
const event = require('./event')

router
  .use('/countries', country)
  .use('/events', event)

module.exports = router
