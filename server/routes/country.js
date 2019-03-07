const country = require('express').Router()
const { CountriesController } = require('../controllers')

country
  .get('/', CountriesController.list)
  .get('/:name', CountriesController.listByName)

module.exports = country