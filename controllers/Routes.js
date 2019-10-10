/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable semi */
const express = require('express');

const router = express.Router();
const cardSet = require('../models/cardSet');
const apiKey = require('../models/apiKey');
const user = require('../models/user');

// GET all cards from multiple sets query is ?_sets=[set1],[set2]
router.get('/sets/multi', (req, res) => {
  user.find({ apiKey: req.query.key }, (err, docs) => {
    if (docs.length) {
      const { sets } = req.query;
      const setsList = sets.split(',');
      cardSet
        .find({ setName: setsList })
        .then((obj) => {
          res.json(obj);
        })
        .catch((err) => {
          throw err;
        });
    } else {
      res.status(401).send('unauthorized');
    }
  });
});

// GET all cards from selected set
router.get('/sets/:id', (req, res) => {
  user.find({ apiKey: req.query.key }, (err, docs) => {
    if (docs.length) {
      const { n } = req.query;
      cardSet
        .findOne({ setName: req.params.id })
        .then((set) => {
          if (n) {
            const whites = set.whiteCards;
            const cards = [];
            for (let i = 0; i < n; i += 1) {
              const cardIndex = Math.floor(Math.random() * whites.length);
              cards.push(whites[cardIndex]);

              whites.splice(cardIndex, 1);
            }

            res.send(cards);
          } else {
            res.json(set);
          }
        })
        .catch((err) => {
          throw err;
        });
    } else {
      res.status(401).send('unauthorized');
    }
  });
});

// router.post('/sets/new', (req, res) => {
//   const set = new cardSet()
//   set.setName = 'help1'
//   set.blackCards = [{ text: 'help', pick: 1 }]
//   set.whiteCards = ['help']
//   set.save()
//     .then((set) => {
//       res.send(set._id)
//     })
// })

router.post('/addkey', (req, res) => {
  const key = new apiKey(req.body);
  user.find({ apiKey: req.query.key }, (err, docs) => {
    if (docs.length) {
      key.save().then(() => {
        res.status(200).send('key sent');
      });
    } else {
      res.status(401).send('unauthorized');
    }
  });
});

// GET a list of cardSets
router.get('/sets', (req, res) => {
  user.find({ apiKey: req.query.key }, (err, docs) => {
    if (docs.length) {
      const output = [];
      cardSet
        .find()
        .then((sets) => {
          sets.map(({ setName }) => {
            return output.push({ setName });
          });
          res.json(output);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.status(401).send('unauthorized');
    }
  });
});

// router.get('/proposed', (req, res) => {
//   ProposedCard.find().then((cards) => {
//     res.send(cards);
//   });
// });

// // POSTing proposed card to db
// router.post('/proposed/new', (req, res) => {
//   const card = new ProposedCard(req.body);
//   card.save().then((c) => {
//     res.send(c._id);
//   });
// });

// // PUT editing the data of a proposed card
// router.put('/proposed/:id', (req, res) => {
//   ProposedCard.findByIdAndUpdate(req.params.id, req.body).then((post) => {
//     res.send(post._id);
//   });
// });

// // DELETE a proposed card
// router.delete('/proposed/:id', (req, res) => {
//   ProposedCard.findByIdAndDelete(req.params.id).then(res.json({ status: 200 }));
// });

module.exports = router;
