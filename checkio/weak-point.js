/*
Input: A durability map as a list of lists with integers.

Output: The coordinates of the weak point as a list (tuple) of integers.
*/

function weakPoint(matrix){
  if (!matrix.length) return;

  let rowWeaknessIndex = 0;
  let rowWeakness = 100;
  
  const colWeaknessStore = [];
  let colWeaknessIndex = 0;
  let colWeakness = 100;

  matrix.forEach((row, key) => {
    const summ = row.reduce((a, b) => { return a + b});
    if (summ < rowWeakness) {
      rowWeakness = summ;
      rowWeaknessIndex = key;
    }
    row.forEach((val, index) => {
      if (!colWeaknessStore[index]) colWeaknessStore[index] = 0;
      colWeaknessStore[index] += val;
    })
  });
  return [rowWeaknessIndex, colWeaknessStore.indexOf(Math.min(...colWeaknessStore))];
}

var assert = require('assert');

if (!global.is_checking) {
  assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                [2, 9, 4, 1, 7],
                [3, 8, 6, 2, 4],
                [2, 5, 2, 9, 1],
                [6, 6, 5, 4, 5]]
                ), [3, 3], "Example");
  assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                [2, 8, 1, 1, 7],
                [3, 8, 6, 2, 4],
                [2, 5, 2, 9, 1],
                [6, 6, 5, 4, 5]]
                ), [1, 2], "Two weak point");

  assert.deepEqual(weakPoint([[1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]]
                ), [0, 0], "Top left");
}
