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
     
  it('Should return a collection of cards GET', function () {
    chai.request(server)
      .get('/sets/base')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })

  it('Should GET a collection of X cards from a Y cardset', function () {

  })
  it('Should POST card to a proposed card object', function () {

  })

})