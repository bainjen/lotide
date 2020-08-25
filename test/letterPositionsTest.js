const assert = require('chai').assert; 
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns the index of the letter 'e' in 'hello' ", () => {

    const input = 'hello';
    assert.deepEqual(letterPositions(input).e, [1] )
  });

});

