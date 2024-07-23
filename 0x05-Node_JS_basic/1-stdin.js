process.stdout.write('Welcome to Holberton School, what is your name?\n');

/**
 * Handles input data from the user.
 * @param {Buffer} data - The input data from the user.
 */
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

/**
 * Handles the end of input stream.
 */
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

