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


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: two objects are equal.`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: two objetcs are not equal.`);
   }
};


const a = { a: 1, b: 2, c: 3, d: 4 }; 
const b = { a: 1, b: 2, c: 3, d: 4 };
const c = { a: 3, b: 2 };

assertObjectsEqual(a, b);
assertObjectsEqual(a, c);


