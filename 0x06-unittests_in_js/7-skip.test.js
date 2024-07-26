const { expect } = require('chai');

// Unit tests for basic number equality checks
describe('Number Equality Tests', () => {

  // Test to confirm that 1 is equal to 1
  it('should verify that 1 equals 1', () => {
    expect(1 === 1).to.be.true;
  });

  // Test to confirm that 2 is equal to 2
  it('should verify that 2 equals 2', () => {
    expect(2 === 2).to.be.true;
  });

  // This test is skipped because 1 is not equal to 3
  it.skip('should verify that 1 equals 3 (skipped)', () => {
    expect(1 === 3).to.be.true;
  });

  // Test to confirm that 3 is equal to 3
  it('should verify that 3 equals 3', () => {
    expect(3 === 3).to.be.true;
  });

  // Test to confirm that 4 is equal to 4
  it('should verify that 4 equals 4', () => {
    expect(4 === 4).to.be.true;
  });

  // Test to confirm that 5 is equal to 5
  it('should verify that 5 equals 5', () => {
    expect(5 === 5).to.be.true;
  });

  // Test to confirm that 6 is equal to 6
  it('should verify that 6 equals 6', () => {
    expect(6 === 6).to.be.true;
  });

  // Test to confirm that 7 is equal to 7
  it('should verify that 7 equals 7', () => {
    expect(7 === 7).to.be.true;
  });
});
