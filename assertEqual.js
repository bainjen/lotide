const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5.5, 5.4);
assertEqual('pippa', 'Pippa');
assertEqual('Prairie', 'Prairie');
// If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
// Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)