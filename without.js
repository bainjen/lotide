const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const without = function (source, itemsToRemove) {
  if (eqArrays(source, itemsToRemove)) {
    return [];
  }
  return source.filter(word => !itemsToRemove.includes(word));
}

module.exports = without; 
