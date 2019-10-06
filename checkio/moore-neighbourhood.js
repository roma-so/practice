function countNeighbours(data, row, col) {
  if (!data.length) return;
  const neighbors =  [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  let counter = 0;
  neighbors.forEach((coords) => {
    const x = row + coords[0];
    const y = col + coords[1];
    if (x >= 0 && y >= 0 && data[x] && data[x][y]) counter ++;
  });
  return counter;
}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                [0, 1, 0, 0, 0],
                                [0, 0, 1, 0, 1],
                                [1, 0, 0, 0, 0],
                                [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

  assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                [0, 1, 0, 0, 0],
                                [0, 0, 1, 0, 1],
                                [1, 0, 0, 0, 0],
                                [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

  assert.equal(countNeighbours([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]], 0, 2), 3, "Dense corner");

  assert.equal(countNeighbours([[0, 0, 0],
                                [0, 1, 0],
                                [0, 0, 0]], 1, 1), 0, "Single");
}
