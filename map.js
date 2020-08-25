const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;