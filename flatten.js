// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

// The lodash implementation can handle seemingly unlimited levels of "nested" arrays (arrays containing arrays containing arrays containing ... you get the point). Our function however, will for now be much simpler and only handle one level of nesting.

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
// The infinite-nesting problem is a great one to be solved using a technique called recursion. You are not expected to apply that here, which is why we've limited it to only one level of nesting. We will cover recursion fairly soon, and you are welcome to return to this problem at that time.

// The Array.isArray() method determines whether the passed value is an Array.
// To be used by mean. Do not alter.

 
// const flattenArray = (arr) => {
//   let flattened = arr.flatMap(e => e, 0, arr);
//   console.log(flattened);
// }
 
// const ex = [[1, 3, 5], 7, 6, [3, 4, [4, 3]], 9, [8]];

// flattenArray(ex);