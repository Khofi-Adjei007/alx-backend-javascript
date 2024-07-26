const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  const API_URL = 'http://localhost:7865';

  it('should return the correct response for GET /', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return the correct response for GET /cart/:id with a valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 47');
      done();
    });
  });

  it('should return a 404 response for GET /cart/:id with negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return a 404 response for GET /cart/:id with non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
