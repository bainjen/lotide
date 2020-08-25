const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {

    if (!callback(item)) {
      results.push(item); 
    } else {
      return results;
    }
  }
}

module.exports = takeUntil;
