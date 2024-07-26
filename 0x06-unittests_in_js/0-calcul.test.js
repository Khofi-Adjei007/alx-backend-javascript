const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('adds two whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.0), 3);
    });

    it('rounds down b\'s fractional part', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.4), 3);
    });

    it('rounds down both a and b\'s fractional parts', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
    });

    it('rounds down a\'s fractional part', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.0), 3);
    });

    it('rounds up b\'s fractional part', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.5), 4);
    });

    it('rounds up both a and b\'s fractional parts', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.5), 6);
    });

    it('rounds up a\'s fractional part', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 2.0), 5);
    });

    it('rounds down both a and b with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
  });
});
