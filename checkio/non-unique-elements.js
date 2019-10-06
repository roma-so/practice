"use strict";

function nonUniqueElements(data) {
  const array = [];
  data.forEach((number) => {
    const duplicateValue = data.filter((value) => {
      return number == value;
    }).length > 1;
    if (duplicateValue) array.push(number);
  });
  return array;
}

var assert = require('assert');

if (!global.is_checking) {
  assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
  assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
  assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
  assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
}
