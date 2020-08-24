const assertEqual = require('./assertEqual');

const head = function (array) {
  return array[0];
}


// head([1, 2, 3, 4, 5]);
// head(['hello', 'this', 'is', 'an', 'array']);
// console.log(head(['p', 'i', 'p']));

module.exports = head;