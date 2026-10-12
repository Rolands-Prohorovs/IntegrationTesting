// Accepts "#RRGGBB", "#RGB", "RRGGBB" or "RGB" (case-insensitive).
// Returns { r, g, b } with values 0–255, or null on invalid input.
function hexToRgb(hex) {
  if (typeof hex !== 'string') return null;

  let clean = hex.trim().replace(/^#/, ''); // removes leading # and whitespace

  if (clean.length === 3) { // expand shorthand hex to full form
    clean = clean.split('').map((c) => c + c).join('');
  }
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null; // validate that string has 6 hex digits

  return { // convert hex to RGB values
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

module.exports = hexToRgb;