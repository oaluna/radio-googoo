// test/models/quote-test.js
const {assert} = require('chai');
const {connectAndDrop, disconnect} = require('../../database');

//import Quote model
const Quote = require('../../models/quote');

//Quote model describe block
describe("Quote", () => {
  //Hook that connects to database, drops existing data
  beforeEach(connectAndDrop);
  //Hook that disconnects from database 
  afterEach(disconnect);

  //verifies that #quote is a string
  describe("#quote", () => {
    it("is a String", () => {
      const quoteAsInt = 1;
      
      const citation = new Quote({quote: quoteAsInt});
      
      assert.strictEqual(citation.quote, quoteAsInt)
    })
  }) 
});