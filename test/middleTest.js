const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual'); 

let arrayTest = [1, 3, 'six', 5, 7]
assertArraysEqual(middle(arrayTest), ['six'])

let arrayTest2 = [1, 3, 'six', 9, 5, 7]
assertArraysEqual(middle(arrayTest2), ['six', 9])


// console.log(middle([1, 2, 8, 9, 5, 6, 2]));
// console.log(middle([1, 2, 8, 9, 5, 6]));
// console.log(middle([5, 6, 2]));
// console.log(middle([2]));
// console.log(middle([1, 2]));
// console.log(middle([]));
// console.log(middle([26, 76, 45, 5.6, 23, 6654]));