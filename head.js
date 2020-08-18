const head = function (array) {
  // console.log(array[0]);
  return array[0];
}

head([1, 2, 3, 4, 5]);
head(['hello', 'this', 'is', 'an', 'array']);
head(['p', 'i', 'p']);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);

