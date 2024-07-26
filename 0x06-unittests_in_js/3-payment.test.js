const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('uses the calculateNumber method of Utils', () => {
    // Spy on the Utils.calculateNumber method
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.callCount).to.equal(1);

    // Restore the original method
    calculateNumberSpy.restore();
  });
});
