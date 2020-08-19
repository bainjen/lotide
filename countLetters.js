const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//+++++FOR MY REFERENCE+++++++
// const countOnly = function (allItems, itemsToCount) {
//   const results = {}
  
//   for (const item of allItems)
//     if (itemsToCount[item]) {
     
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//         results[item] = 1;
//       }

//     }
//   console.log(results);
//   return results;

// };

//+++++INSTRUCTIONS+++++++++++
// The function should take in a sentence(as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
// const results = { L: 2, H: 1}
// You can use for...of loops with strings.
//skip spaces

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
// assertEqual(countLetters(string1), {j: 1, e: 1, l: 2, o: 1})
// come back and test with assertEqualObject();