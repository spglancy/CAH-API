/* eslint-disable semi */
const express = require('express')
const router = express.Router()
const cardSet = require('../models/cardSet')
const proposedCard = require('../models/proposedCard')

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
  const output = []
  cardSet.find()
    .then((sets) => {
      sets.map(({ setName }) => {
        return output.push(setName)
      })
      console.log(output)
      res.send(output)
    })
    .catch((err) => {
      console.log(err)
    })
})

// GET a certain amount of cards from selected set query is ?_n=numcards
router.get('/sets/:id', (req, res) => {
  const { n } = req.query
  cardSet.find({ setName: req.params.id })
    .then((set) => {
      const collection = []
      let i = 0
      while (i < n) {
        const index = Math.floor(Math.random() * set.whiteCards.length)
        if (!(collection.includes(set.whiteCards[index]))) {
          collection.append(set.whiteCards[index])
          i += 1
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
  proposedCard.create(req.body)
    .then((card) => {
      res.send({ cardId: card._id})
    })
    .catch((err) => {
      throw err
    })
})

// PUT editing the data of a proposed card
router.put('/proposed/:id', (req, res) => {
  proposedCard.findByIdAndUpdate(req.params.id, req.body)
})

// DELETE a proposed card
router.post('/proposed/:id?method=DELETE', (req, res) => {
  
})

module.exports = router
