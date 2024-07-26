const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  const API_URL = 'http://localhost:7865';

  // Test the response for a GET request to the root path
  it('should return the correct response for GET /', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200); // Check for a 200 OK status
      expect(body).to.equal('Welcome to the payment system'); // Verify the response body
      done();
    });
  });
});
