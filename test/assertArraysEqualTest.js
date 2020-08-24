const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([0], [0]);
assertArraysEqual([], []);
assertArraysEqual([5, 5, 5, 5], [5, 5, 5, 5]);


