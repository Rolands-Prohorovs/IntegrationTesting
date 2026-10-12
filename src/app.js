const express = require('express');
const hexToRgb = require('./HexToRgb');

const app = express();

app.get('/hex-to-rgb', (req, res) => {
  const { hex } = req.query; // Get the hex query parameter

  if (!hex) { // If hex is missing, return a 400 error
    return res.status(400).json({ error: 'Missing "hex" query parameter' });
  }

  const rgb = hexToRgb(hex); // Convert hex to RGB using the utility function
  if (!rgb) { // If hex is invalid, return a 400 error
    return res.status(400).json({ error: 'Invalid hex color' });
  }

  res.json({ hex, ...rgb }); // Return the hex and RGB values as JSON
});

module.exports = app;