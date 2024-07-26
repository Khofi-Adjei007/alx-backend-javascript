const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy on the console object if it doesn't already exist
    if (!consoleSpy) {
      consoleSpy = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    // Reset the history of the console.log spy after each test
    consoleSpy.resetHistory();
  });

  // Test case for sendPaymentRequestToApi with inputs 100 and 20
  it('should log "The total is: 120" to the console when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  // Test case for sendPaymentRequestToApi with inputs 10 and 10
  it('should log "The total is: 20" to the console when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
