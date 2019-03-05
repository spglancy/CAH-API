/* eslint-disable no-underscore-dangle */
/* eslint-disable semi */
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

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
      // not working for some reason
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          // Password does not match
          return res.status(401).json({ 
            result: 'Unsuccessful',
            message: 'Wrong Email or Password',
          })
        }
        console.log(process.env.SECRET)
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
  let user = {}
  if (pwd === pwdconf) {
    user = new User(req.body)
  } else {
    return res.send({ message: 'Passwords do not match' })
  }
  user.email = user.email.toLowerCase()
  User.findOne({ email }).then((check) => {
    if (!check) {
      user.save().then((u) => {
        const token = jwt.sign({ _id: u._id }, process.env.SECRET, { expiresIn: '60 days' })
        res.json({
          result: 'Success',
          userId: u._id,
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
