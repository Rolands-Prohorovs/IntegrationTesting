const hexToRgb = require('../src/HexToRgb');

describe('hexToRgb (unit)', () => { 
  test('converts 6-digit hex with #', () => { // Test for correct conversion of a 6-digit hex color code WITH a leading # to its RGB equivalent
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('converts 6-digit hex without #', () => { // Test for correct conversion of a 6-digit hex WITHOUT a leading # to its RGB equivalent
    expect(hexToRgb('00ff00')).toEqual({ r: 0, g: 255, b: 0 });
  });

  test('converts 3-digit shorthand', () => { // Test for correct conversion of a 3-digit shorthand hex color code to its RGB equivalent
    expect(hexToRgb('#f0a')).toEqual({ r: 255, g: 0, b: 170 });
  });

  test('is case-insensitive', () => { // Test for correct conversion of a hex color code with mixed case letters to its RGB equivalent
    expect(hexToRgb('#AbCdEf')).toEqual({ r: 171, g: 205, b: 239 });
  });

  test('handles black and white', () => { // Test for correct conversion of black and white hex color codes to their RGB equivalents
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
  });

  test.each([ // Test for various invalid hex color codes to ensure the function returns null
    ['#gggggg'],
    ['#12345'],
    ['#1234567'],
    ['not-a-color'],
    [''],
    [null],
    [undefined],
    [123456],
  ])('returns null for invalid input: %p', (input) => {
    expect(hexToRgb(input)).toBeNull();
  });
});