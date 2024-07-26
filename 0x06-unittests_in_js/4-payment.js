const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculate the total cost using the SUM operation
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
