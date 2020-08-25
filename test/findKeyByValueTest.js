const assert = require('chai').assert; 
const findKeyByValue = require('../findKeyByValue');  

describe("#findKeyByValue", () => {
  it("returns a key (drama)according to its value(the wire)", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });
});

// const colors = {
//   apple: 'red',
//   orange: 'orange',
//   sky: 'blue',
//   grass: 'green'
// }; 