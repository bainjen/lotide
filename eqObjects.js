//+++++++INSTRUCTIONS++++++++++
// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
// Start with a couple basic tests. One for true and one for false.

// Run the two tests to ensure that they are failing in the the way that we'd expect.
// Our function is currently returning undefined and the assertion should be failing due to that issue.

// Our tests above are deliberately simple, only using objects that have primitive values. It's generally considered good practice to start with solving simple scenarios first and then add more logic from there.

// In this simple scenario, two objects are equal when:

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object
// Implement the function in order to pass the assertions written so far.

//+++++++++NOTES+++++++++++
//use the for in loop again to get through object 
//Object.keys provide all key names within an object 
//tried those variablesvvv
// const keysOne = Object.keys(object1);
// const keysTwo = Object.keys(object2);
// if (keysOne.length !== keysTwo.length) {
//   return false;
// }


//+++++++CODE+++++++++++++

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const eqObjects = function (object1, object2) {

  console.log(object1, object2);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {

    console.log(key);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};



//+++++++++++TEST CODE++++++++++++++
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ab2 = { a: '1', b: '0' };
const abc = { a: "1", b: "2", c: "3" }; 

//test assert equal
// assertEqual(ab.a, ba.a)
// assertEqual(abc.c, ab.c)

//primitive type check
// console.log(eqObjects(ab, ba)); // => true
// console.log(eqObjects(ab, abc)); // => false

//array handling test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

//learning Object.keys

// const nums = {
//   one: 1, 
//   two: 2, 
//   three: 3, 
//   four: 4
// }

// console.log(Object.keys(nums));