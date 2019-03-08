const event = require('express').Router()
const { EventsController } = require('../controllers')

event
  .get('/:country', EventsController.getHolidayAllYear)

module.exports = event