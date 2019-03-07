const axios = require('axios');

module.exports = {
  countries: axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
  })
}