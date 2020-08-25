# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bainjen/lotide`

**Require it:**

`const _ = require('@bainjen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element in an array
* `tail(...)`: returns all elements in an array except for the first element
* `middle(...)`: finds and returns the middle value or values of an array
* `without(...)`: takes in a source and items to remove and returns the source with specified items removed
* `takeUntil(...)`: takes in an array and loops through it until a specified condition is met
* `map(...)`: makes a copy of an existing array
* `letterPositions(...)`: takes in a string and returns all the indices in the string where each character is found.
* `findKey(...)`: scans an object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(...)`: returns a key from an object when provided with a value as an argument 
* `eqObjects(...)`: compares two objects to check for a match
* `eqArrays(...)`: compares two arrays to check for a match
* `countOnly(...)`: return counts for a specific subset of those items
* `countLetters(...)`: counts the number of letters in a string
* `assertEqual(...)`: compares strings and numbers and asserts whether they are equal
* `assertArraysEqual(...)`: assertion test to determine whether two arrays are equal 
* `assertObjects Equal(...)`: ssertion test to determine whether two objects are equal 