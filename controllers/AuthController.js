const express = require('express');

const router = express.Router();
const User = require('../models/user.js');

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.apiKey = 'yeet';
  user.save().then((user) => {
    res.status(200).send('register success');
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, 'username password')
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
        return res.status(200).send('login success');
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
