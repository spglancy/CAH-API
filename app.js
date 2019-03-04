/* eslint-disable semi */
const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const RouteController = require('./controllers/Routes')
const authController = require('./controllers/authController')

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CAH-API');

mongoose.connect(config.mongoURL, { useNewUrlParser: true })
  .catch((err) => {
    throw err
  })

app.use(cors({ origin: 'http://localhost:3001/' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', RouteController)
app.use('/', authController)

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

module.exports = app
