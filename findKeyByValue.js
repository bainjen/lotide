//+++++INSTRUCTIONS++++++++++
// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

//+++++NOTES++++++++++++++++
//for in loops can loop over key values -- can use this to ask --> is this key equal to this value? If so, let's return it!

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

//+++++++CODE+++++++++++++++

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}


//+++++++++++++TEST CODE+++++++++++++++++
// Use assertEqual to write test cases for various scenarios.
// The tests should be written below the definition of your function.
// Here are some test assertions for you to implmement and make pass, but you should write a few more:



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const colors = {
  apple: 'red',
  orange: 'orange',
  sky: 'blue',
  grass: 'green'
}; 

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(colors, "blue"));
console.log(findKeyByValue(colors, "yellow"));
console.log(findKeyByValue(colors, 786));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(colors, "red"), 'apple');
assertEqual(findKeyByValue(colors, "purple"), undefined );