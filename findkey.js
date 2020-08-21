//+++++++++INSTRUCTIONS++++++++++++++=
// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// Use assertEqual to write test cases for various scenarios.
// The tests should be written below the definition of your function.

//go over the object and when the condition of the callback function is true, return the associated key name. If mot key is found, return undefined. 

//+++++++CODE+++++++++++++++



const findKey = function(object, callback) {

  for (let key in object) {

    if (callback(object[key])) {
      return key;
    }
 
  }
}
  
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))



   // console.log('key; ', key);
    // console.log('object[key]; ', object[key]);
    // console.log(callback(object.key))
    // console.log('~~~~~~~~~~')