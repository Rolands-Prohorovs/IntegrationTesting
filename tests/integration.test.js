const request = require('supertest');
const app = require('../src/app');

describe('GET /hex-to-rgb (integration)', () => {
  it('200 with correct RGB for a valid hex', async () => { // Test that a valid hex color code returns a 200 status and the correct RGB values
    const res = await request(app).get('/hex-to-rgb').query({ hex: '#ff8800' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ hex: '#ff8800', r: 255, g: 136, b: 0 });
  });

  it('200 for shorthand hex without #', async () => { // Test that a valid 3-digit shorthand hex color code without a leading # returns a 200 status and the correct RGB values
    const res = await request(app).get('/hex-to-rgb').query({ hex: 'f0a' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ hex: 'f0a', r: 255, g: 0, b: 170 });
  });

  it('400 when hex is missing', async () => { // Test that a request without the hex query parameter returns a 400 status and an error message
    const res = await request(app).get('/hex-to-rgb');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('400 when hex is invalid', async () => { // Test that a request with an invalid hex color code returns a 400 status and an error message
    const res = await request(app).get('/hex-to-rgb').query({ hex: 'zzzzzz' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});