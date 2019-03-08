const google = require('express').Router()
const { GoogleAuthController } = require('../controllers')

google
  .post('/', GoogleAuthController.signin)

module.exports = google