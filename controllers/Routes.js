/* eslint-disable semi */
const express = require('express')
const router = Express.router()
const methodOverride = require('method-override')

// GET all cards from selected set
router.get('/sets/:id', (req, res) => {

})

// GET a list of cardSets
router.get('/sets', (req, res) => {
  
})

// GET a certain amount of cards from selected set query is ?_n=numcards
router.get('/sets/:id', (req, res) => {
  const { n } = req.query
})

// GET all cards from multiple sets query is ?_sets=[set1],[set2]
router.get('/sets/multi', (req, res) => {
  const { sets } = req.query
  
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