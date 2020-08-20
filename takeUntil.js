
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

//+++++++INSTRUCTIONS++++++++++
// It will take in two parameters as well:
// The array to work with
// The callback(which Lodash calls "predicate")
// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
// To keep things simple, the callback should only be provided one value: The item in the array.
// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ['goose', 'gibbon', 'snail', 'snail', 'hippo'];

const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (!callback(item)) {
      results.push(item); 
    } else {
      break; 
    }
  }
  return results;
}


//+++++TEST CASES+++++++++++++++++

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log('---');

const results3 = takeUntil(data3, x => x === 'snail');
console.log(results3);
assertArraysEqual(results3, [ 'goose', 'gibbon']);
console.log('---');

const results4 = takeUntil(data3, x => x[2] === 'p');
console.log(results4);
assertArraysEqual(results4, ['goose', 'gibbon', 'snail', 'snail']);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]