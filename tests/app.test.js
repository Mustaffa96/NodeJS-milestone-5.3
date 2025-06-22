const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  describe('GET /api/health', () => {
    it('should return health check status', async () => {
      const res = await request(app)
        .get('/api/health')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).toHaveProperty('status', 'ok');
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('404 handling', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app)
        .get('/api/unknown-route')
        .expect('Content-Type', /json/)
        .expect(404);

      expect(res.body).toHaveProperty('message', 'Route not found');
    });
  });
});
