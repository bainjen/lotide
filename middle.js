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

const middle = function (array) {
  if (array.length <= 2) {
    return []; 
  }
  let middleArray = []; 
  let length = array.length

  if (length % 2 === 0) {
  
    let indexTwo = length / 2;
    let indexOne = indexTwo - 1; 
    // console.log(length, indexOne, indexTwo);
    middleArray = [array[indexOne], array[indexTwo]];
    // console.log(middleArray);
    return middleArray; 

  } else {
    let singleIndex = Math.floor(length / 2); 
    middleArray = [array[singleIndex]];
    return middleArray;
  }
}

console.log(middle([1, 2, 8, 9, 5, 6, 2]));
console.log(middle([1, 2, 8, 9, 5, 6]));
console.log(middle([5, 6, 2]));
console.log(middle([2]));
console.log(middle([1, 2]));
console.log(middle([]));
console.log(middle([26, 76, 45, 5.6, 23, 6654]));
// console.log(assertArraysEqual())

//+++++JENNIFER'S STREAM OF THOUGHTS+++++++++
//given a number -- we can use the index to find the length of the array.

// [0, 1, 2, 3, 4, 5] --> 6 numbers long --->we will want 2 and three as our answers...
// 6 / 2 = 3 ---> we want 3rd index and 3rd index - 1.

// [0, 1, 2, 3, 4] --> 5 numbers long ---> we will want 2 as an answer
// 5 / 2 = 2.5 --> round down to 2 Math.floor()


// Implement middle which will take in an array and return the middle - most element(s) of the given array.

// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]) // => []
// middle([1, 2]) // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// Write test assertions for the various scenarios with middle

// We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.

// You may wonder if your middle.js file is supposed to be this long.


