const assert = require('chai').assert; 
const map = require('../map');



describe("#mapTest", () => {
  it("returns an array where all numbers are multipled by 3", () => {
    assert.deepEqual(map([1, 2, 3], x => x * 3),[3, 6, 9]);
  });
  
});

