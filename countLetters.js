const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string) {
  string = string.toLowerCase().replace(/\s+/g, '');
  
  const results = {};

  for (const letter of string) {

    if (results[letter]) {
      results[letter]++;
    }
    else {
      results[letter] = 1; 
    }
  }

  return results;
}


let string1 = 'jello';
let string2 = 'hAi tHeRe!';
let string3 = 'I have 4 snails.';
let string4 = 'I like bees';
let string5 = 'aaa bbb ccc ddd';
countLetters(string2);
countLetters(string3);
countLetters(string4);
countLetters(string5);
