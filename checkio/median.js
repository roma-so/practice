function median(data) {
  if (!data.length) return;
  let middle = 0;
  data = data.sort((a, b) => { return a - b });
  const middleIndex = Math.floor(data.length / 2);

  if (data.length % 2) middle = data[middleIndex]
  else middle = (data[middleIndex] + data[middleIndex - 1]) / 2;
  return middle;
}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
  assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
  assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
  assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
}
