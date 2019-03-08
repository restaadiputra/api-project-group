const countries = require('../helpers/axios').countries

class CountriesController {
  static list(req, res, next) {
    countries.get('/all')
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static listByName({ params }, res, next) {
    countries.get(`name/${params.name}?fullText=true`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = CountriesController