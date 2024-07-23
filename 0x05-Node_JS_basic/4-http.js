const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

/**
 * Request handler for incoming HTTP requests.
 */
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';
  
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(responseText));
  res.statusCode = 200;
  res.end(responseText);
});

/**
 * Starts the server and listens on the specified port and host.
 */
app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});

module.exports = app;
