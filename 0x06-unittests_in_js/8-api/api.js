const express = require('express');

const app = express();
const PORT = 7865;

// Route handler for the root path
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Start the server and log the port number
app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});

module.exports = app;
