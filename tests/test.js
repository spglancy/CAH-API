const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const agent = chai.request.agent(app);

chai.use(chaiHttp);

describe("/set/:id", function() {
    it("Should return a Collection of cards", function() {
        agent
            .get("/set/:id")
    })
})

