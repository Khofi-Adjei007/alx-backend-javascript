const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('calls console.log with the correct arguments', () => {
    // Spy on the console.log method
    const consoleSpy = sinon.spy(console, 'log');
    // Stub the Utils.calculateNumber method
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Call the function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.equal(1);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.equal(1);

    // Restore the original methods
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
