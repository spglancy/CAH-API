/* eslint-disable semi */
const router = Express.router()
const cardSet = require('../models/cardSet')

// GET all cards from selected set
router.get('/sets/:id', (req, res) => {
  cardSet.find({ setName: req.params.id })
    .then((set) => {
      res.json(set)
    })
    .catch((err) => {
      throw err
    })
})

// GET a list of cardSets
router.get('/sets', (req, res) => {
  cardSet.find()
    .then((sets) => {
      res.send(sets.setName)
    })
    .catch((err) => {
      throw err
    })
})

// GET a certain amount of cards from selected set query is ?_n=numcards
router.get('/sets/:id', (req, res) => {
  const { n } = req.query
  cardSet.find({ setName: req.params.id })
    .then((set) => {
      const collection = []
      for (let i = 0; i <= n; i += 1) {
        const index = Math.floor(Math.random() * set.whiteCards.length)
        if (!(collection.includes(set.whiteCards[index]))) {
          collection.append(set.whiteCards[index])
        } else {
          i -= 1
        }
      }
      res.send(collection)
    })
    .catch((err) => {
      throw err
    })
})

// GET all cards from multiple sets query is ?_sets=[set1],[set2]
router.get('/sets/multi', (req, res) => {
  const { sets } = req.query
  cardSet.find({ setName: sets })
    .then((obj) => {
      res.json(obj)
    })
    .catch((err) => {
      throw err
    })
})

// POSTing proposed card to db
router.post('/proposed/new', (req, res) => {
  
})

// PUT editing the data of a proposed card
router.put('/proposed/:id', (req, res) => {
  
})

// DELETE a proposed card
router.post('/proposed/:id?method=DELETE', (req, res) => {
  
})