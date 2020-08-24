const assertEqual = require('../assertEqual');
const tail = require('../tail');

const alph = ['a', 'b', 'c'];
const test = [1, 2, 3, 4];
const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(test.length, 4);
assertEqual(alph.length, 3);
assertEqual(words.length, 3); 