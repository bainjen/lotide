const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const alph = ['a', 'b', 'c'];
const test = [1, 2, 3, 4];

const tail = function(array) {
  // let newArray = [...array];
  // newArray.shift();
  // console.log(newArray);
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  console.log(newArray);
  return newArray;

};
// tail(alph);
// tail(test);

tail(test);
assertEqual(test.length, 4);
tail(alph);
assertEqual(alph.length, 3);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!