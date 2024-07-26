const express = require('express');

const app = express();
const PORT = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for the root path
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

// Route for retrieving cart information based on ID (numeric only)
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Route to provide available payment methods
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Route for user login, responds with a welcome message
app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
