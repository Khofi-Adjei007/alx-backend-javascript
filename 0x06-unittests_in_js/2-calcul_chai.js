const calculateNumber = (type, a, b) => {
  // Round both inputs and perform the operation based on the type
  if (type === 'SUM') {
    // Return the sum of rounded inputs
    return Math.round(a) + Math.round(b);
  }
  
  if (type === 'SUBTRACT') {
    // Return the difference between rounded inputs
    return Math.round(a) - Math.round(b);
  }
  
  if (type === 'DIVIDE') {
    // Return 'Error' if the rounded divisor is 0; otherwise, return the quotient of rounded inputs
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  
  // Return 0 for any other type
  return 0;
};

module.exports = calculateNumber;
