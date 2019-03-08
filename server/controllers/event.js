const events = require('../helpers/axios').events

class EventsController {
  static getHolidayAllYear({ params }, res, next) {
    events.get(`?country=${params.country}&year=${new Date().getFullYear()}&api_key=${process.env.CALENDARIFIC}`)
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = EventsController