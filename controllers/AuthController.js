const express = require('express');
const uuidv4 = require('uuid/v4');

const router = express.Router();
const User = require('../models/user.js');

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.apiKey = uuidv4();
  user.save().then((u) => {
    res.status(200).json({ key: u.apiKey });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        // User not found
        return res.status(401).send({ message: 'Wrong Email or Password' });
      }
      // Check the password
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          // Password does not match
          return res.status(401).send({ message: 'Wrong Email or Password' });
        }
        // Set a cookie and redirect to root
        return res.status(200).json({ key: user.apiKey});
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
