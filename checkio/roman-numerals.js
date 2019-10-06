function romanNumerals(number) {
  let roman = '';
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  for (let i in lookup ) {
    while ( number >= lookup[i] ) {
      roman += i;
      number -= lookup[i];
    }
  }
  return roman;
}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(romanNumerals(6), 'VI', "First");
  assert.equal(romanNumerals(76), 'LXXVI', "Second");
  assert.equal(romanNumerals(499), 'CDXCIX', "Third");
  assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
}
