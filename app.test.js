const request = require('supertest');
const app = require('./index'); // Import your Express app

describe('GET /android', () => {
  it('should return a list of android phones', async () => {
    const res = await request(app).get('/android');
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual(["Xaomi", "Samsung", "Google Phone"]);
  });
});
