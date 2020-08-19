//++++++INSTRUCTIONS++++++++++
// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

// {
// l: [0, 2],
// h: [1]
// }



//+++++++CODE++++++++++++++


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


const letterPositions = function(sentence) {
  
  const results = {};


  for (let i = 0; i < sentence.length; i++) {

    let letter = sentence[i];
    
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  
  return results;
};


//++++++TEST CODE+++++++++

letterPositions('hello'); 
letterPositions('i like snails')
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("super").e, [3]);