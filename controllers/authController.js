/* eslint-disable no-underscore-dangle */
/* eslint-disable semi */
const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// checks user auth and logs in
router.post('/login', (req, res) => {
  const email = req.body.email.toLowerCase()
  const password = req.body.password
  // Find this user name
  User.findOne({ email }, 'email password')
    .then((user) => {
      if (!user) {
        // User not found
        return res.status(401).json({
          Status: 'Unsuccessful',
          message: 'Wrong Email or Password',
        })
      }
      // Check the password
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          // Password does not match
          return res.status(401).json({ 
            result: 'Unsuccessful',
            message: 'Wrong Email or Password',
          })
        }
        const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '60 days' })
        return res.status(200).json({
          result: 'Success',
          userId: user._id,
          token,
        })
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/register', (req, res) => {
  const { email, pwd, pwdconf } = req.body
  if (pwd === pwdconf) {
    const user = new User(req.body)
  } else {
    return res.send({ message: 'Passwords do not match' })
  }
  user.email = user.email.toLowerCase()
  User.findOne({ email }).then((check) => {
    if (!check) {
      user.save().then((user) => {
        // creating token for web based clients
        const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '60 days' })
        res.json({
          result: 'Success',
          userId: user._id,
          token,
        })
      })
    } else {
      res.json({
        result: 'Unsuccessful',
        message: 'This Email is already in use',
      })
    }
  })
})


module.exports = router
