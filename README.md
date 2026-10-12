# hex-to-rgb

Node.js project that converts hex color values to RGB.

Contents
Library 
  - src/hexToRgb.js — function converting #RRGGBB, RRGGBB, #RGB, or RGB (case-insensitive) to { r, g, b }, or null on invalid input.
  - REST API (src/app.js, server.js) — Express route GET /hex-to-rgb?hex=<value> returning 200 with JSON or 400 with an error.
  - Tests (tests/) — Jest unit tests for the library and Supertest integration tests for the route.

Usage
```
npm install
npm test          # run tests
npm start         # start server on port 3000
```
Example request:
```
GET http://localhost:3000/hex-to-rgb?hex=#ff8800
Response:
{
  "hex": "#ff8800",
  "r": 255,
  "g": 136, "
  b": 0
}
```
