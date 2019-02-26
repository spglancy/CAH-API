const app = require("./../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const agent = chai.request.agent(app);

chai.should()
chai.use(chaiHttp);


describe('CardSet', function () {
    
  it("Should return a collection of cards GET", function() {
      agent
      .get("/sets/base")
      .end((err, res) => {
          res.should.have.status(200)
          done()
      })
  })

})