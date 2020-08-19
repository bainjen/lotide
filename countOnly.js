const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//++++++NEW FUNCTION+++++++


// Add an if condition to only increment our count in results if the item is found in the itemsToCount object.

const countOnly = function (allItems, itemsToCount) {
  const results = {}
  
  for (const item of allItems)
    if (itemsToCount[item]) {
     
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }

    }
  console.log(results);
  return results;

};




//++++TEST CODE+++++

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);