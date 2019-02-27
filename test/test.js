/* eslint-disable semi */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// const should = chai.should()
chai.use(chaiHttp)


describe('CardSet', function () {
  after(() => {
  })

  it('Should GET a collection of cards from the base card set', function () {
    chai.request(server)
      .get('/sets/base')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })

  it('Should GET a collection of X cards from a Y cardset', function () {

  })

  it('Should GET a collection of cards from multiple card sets in a list', function () {

  })

  it('Should POST card to a proposed card object', function () {

  })

  it('Should PUT a change to a proposed card', function () {

  })

  it('Should DELETE a proposed card from the proposed cards', function () {

  })
})
