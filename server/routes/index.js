const router = require('express').Router()
const country = require('./country')
const event = require('./event')
const google = require('./auth_google')

router
  .use('/countries', country)
  .use('/events', event)
  .use('/signin/google', google)

module.exports = router
