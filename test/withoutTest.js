const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] from [1, 2, 3] with an input of 1", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['hello', 'world'] from ['hello', 'world', 'lighthouse'] with input of 'lighthouse'", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]); 
  });
});



