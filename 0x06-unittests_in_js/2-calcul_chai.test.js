const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber Function Tests', () => {

  describe('SUM Operation', () => {
    it('should return 4 for two positive numbers (2.0, 2.0)', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('should return 4 for positive numbers (2.3, 1.8) after rounding', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('should return -4 for two negative numbers (-2.0, -2.0)', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('should return -4 for negative numbers (-2.3, -1.8) after rounding', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('should return 0 for a negative and positive number (-2.0, 2.0)', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('should return 0 for a positive and negative number (2.0, -2.0)', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('should return 0 for two zeros (0.0, 0.0)', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('SUBTRACT Operation', () => {
    it('should return 0 for two positive numbers (2.0, 2.0)', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('should return 0 for positive numbers (2.3, 1.8) after rounding', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('should return 0 for two negative numbers (-2.0, -2.0)', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('should return 0 for negative numbers (-2.3, -1.8) after rounding', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('should return -4 for a negative and positive number (-2.0, 2.0)', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4);
    });

    it('should return 4 for a positive and negative number (2.0, -2.0)', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4);
    });

    it('should return 0 for two zeros (0.0, 0.0)', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('DIVIDE Operation', () => {
    it('should return 4 for positive numbers (8.0, 2.0)', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('should return -3.5 for numbers with different signs (-7.0, 2.0)', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('should return -3.5 for numbers with different signs (7.0, -2.0)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('should return 3.5 for negative numbers (-7.0, -2.0)', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('should return 1 for equal positive numbers (2.0, 2.0)', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('should return 1 for equal negative numbers (-2.0, -2.0)', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('should return 1 for rounded up numbers (2.6, 3.0)', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('should return 1 for rounded down numbers (2.4, 2.0)', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('should return 0 for 0 and a positive number (0.0, 5.0)', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('should return -0 for 0 and a negative number (0.0, -5.0)', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('should return "Error" for a positive number divided by 0 (5.0, 0)', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('should return "Error" for a positive number divided by a number rounded down to 0 (5.0, 0.2)', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" for a positive number divided by a number rounded up to 0 (5.0, -0.2)', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" for a negative number divided by 0 (-5.0, 0)', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('should return "Error" for a negative number divided by a number rounded down to zero (-5.0, 0.2)', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" for a negative number divided by a number rounded up to zero (-5.0, -0.2)', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" for 0 divided by 0 (0.0, 0.0)', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
