const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');



const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: two arrays are equal.`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: two arrays are not equal.`);
  }
   
};

module.exports = assertArraysEqual