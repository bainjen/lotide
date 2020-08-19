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


// This function should take in a source array and a itemsToRemove array.It should return a new array with only those elements from source that are not present in the itemsToRemove array.

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const without = function (source, itemsToRemove) {
  if (eqArrays(source, itemsToRemove)) {
    return [];
  }

  // let result = [];
  // for (let i = 0; i < source.length; i++) {
  //   if (!itemsToRemove.includes(source[i])) {
  //     result.push(source[i]);
  //   }
  // }
  // return result; 

  return source.filter(word => !itemsToRemove.includes(word));

}


const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]);
console.log(result);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

