const express = require('express');

const app = express();
const PORT = 7865;

// Route to handle GET requests at the root path
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Route to handle GET requests for cart details using an ID
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
