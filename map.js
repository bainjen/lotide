
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false; 
}
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: two arrays are equal.`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: two arrays are not equal.`);
  }
   
};

//++++++++++INTRSUCTIONS+++++++++++
// Our map function will take in two arguments:
// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

// Write test cases using at least three different ways of using map.
// Think about the different scenarios that make sense to test.
// Be sure to use assertArraysEqual to compare the results from map with expected array results.


const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5];
const animals = ['goose', 'gibbon', 'snail', 'snail', 'hippo'];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


//+++++TEST CASES+++++++++++++++++
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(nums, num => num * 3);
assertArraysEqual(results2, [3, 6, 9, 12, 15]); 

const results3 = map(animals, animal => animal === 'snail');


assertArraysEqual(results3, [false, false, true, true, false]);


//++++++++STEP BY STEP COMPASS++++++++++++

// const map = function() {
//   // empty for now :)
// }

// const map = function(array, callback) {
//   // temporary code:
//   console.log('array: ', array);
//   console.log('callback: ', callback);

//   const results = [];
//   return results;
// }

// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// }

// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// }