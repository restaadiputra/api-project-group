const axios = require('axios');

module.exports = {
  countries: axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
  }),
  events: axios.create({
    baseURL: 'http://calendarific.com/api/v2/holidays'
  })
}