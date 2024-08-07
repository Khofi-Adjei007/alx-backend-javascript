const express = require('express');

const app = express();
const PORT = 1245;

/**
 * Root route handler that sends a welcome message.
 */
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Starts the server and listens on the specified port.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
