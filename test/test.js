const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();


chai.should()
chai.use(chaiHttp);


describe('CardSet', function () {

  after(() => {
    
  })
    
  it("Should return a collection of cards GET", function() {
      chai.request(server)
      .get("/sets/base")
      .end((err, res) => {
          res.should.have.status(200)
          done()
      })
  })

})