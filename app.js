/* eslint-disable semi */
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
const config = require('./config')
const RouteController = require('./controllers/Routes')

app.use(methodOverride('_method'))

app.use('/', RouteController)

mongoose.connect(config.mongoURL, { useNewUrlParser: true })
  .catch((err) => {
    throw err
  })

// should be last get, will return an error message for requests to routes that do not exist
app.get('*', (req, res) => {
  res.send({
    message: 'This endpoint does not exist',
    error: 404,
  }, 404);
});

app.listen(config.port, () => {
  console.log(`App running on port ${config.port}`)
})
