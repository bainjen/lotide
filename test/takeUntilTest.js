const assert = require('chai').assert; 
const takeUntil = require('../takeUntil');


describe("#takeUntil", () => {
  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] from [`I've`, `been`, `to`, `Hollywood`, `,`, `I've`, `been`, `to`, `Redwood`]; and told to stop at the comma", () => {
    assert.deepEqual(takeUntil([`I've`, `been`, `to`, `Hollywood`, `,`, `I've`, `been`, `to`, `Redwood`], x => x === ','),[`I've`, `been`, `to`, `Hollywood`]);
  });

  it("[1, 2, 5, 7, 2] returns [1, 2]", () => {
    const callbackFunction = function (x) {
      return x === 5;
    }
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2], callbackFunction ), [1, 2,]); 
  });

});

