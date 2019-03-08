if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes')

app
  .use(require('cors')())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

app.use('/api/', routes)

app
  .use(function (err, req, res, next) {
    if (err && err instanceof String) {
      err = newError(err)
    }
    console.log(err)
    res
      .status(res.statusCode === 200 ? 500 : res.statusCode)
      .json({ message: 'Internal Server Error' })
  })
  .listen(port, function() {
    console.log(`app runs on port ${port}`)
  })