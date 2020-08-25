const assert = require('chai').assert; 
const findKey = require('../findKey');
const findKeyByValue = require('../findKeyByValue');



describe("#findKeyTest", () => {
  it("returns ", () => {

    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }
    const callback = x => x.stars === 2; 
    assert.deepEqual(findKey(obj, callback) ['noma', 'Ora']);
  });
  
});

