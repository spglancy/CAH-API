/* eslint-disable semi */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app')

chai.use(chaiHttp)


describe('CardSet', function () {

  const newCard = {
    content: 'This is a funny card hehexD',
    user: 'apikey',
  }

  const cardId = 'cardid'

  after(() => {
  })

  it('Should GET a collection of cards from the base card set', function () {
    chai.request(server)
      .get('/sets/base')
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res).to.have.status(200)
        expect(res).to.be.a(JSON)
        done()
      })
  })

  it('Should GET a list of the names of all the current card sets', function () {
    chai.request(server)
      .get('/sets')
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res).to.have.status(200)
        expect(res).to.be.a(Array)
        done()
      })
  })

  it('Should GET a collection of X cards from a Y cardset', function () {
    chai.request(server)
      .get('/sets/90s?n=8')
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res).to.have.status(200)
        expect(res).to.be.a(Array)
        expect(res.length).to.equal(8)
        done()
      })
  })

  it('Should GET a collection of all cards from multiple card sets in a list', function () {
    chai.request(server)
      .get('/sets/multi?sets=90s,Base')
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res).to.have.status(200)
        expect(res).to.be.a(JSON)
        done()
      })
  })

  it('Should POST card to a proposed card object', function () {
    chai.request(server)
      .post('/proposed/new')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send(newCard)
      .end((err, res) => {
        expect(res).to.have.status(200)
        cardId = res.cardId
        done()
      })
  })

  it('Should PUT a change to a proposed card', function () {
    newCard.content = 'this is a differect card lmao'
    chai.request(server)
      .put(`/proposed/${cardId}`)
      .send(newCard)
      .set('content-type', 'application/x-www-form-urlencoded')

      .end((err, res) => {
        expect(res).to.have.status(200)
      })
  })

  it('Should DELETE a proposed card from the proposed cards', function () {
    chai.request(server)
    .delete(`/proposed/${cardId}?method=DELETE`)
    .end((err, res) => {
        
    })
  })
})
