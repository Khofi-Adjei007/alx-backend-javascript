const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Reads a CSV file containing student data and generates a report.
 * @param {string} dataPath - Path to the CSV file.
 * @returns {Promise<string>} - A promise that resolves to a report string.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    fileLines.slice(1).forEach((line) => {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, -1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    });

    const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
    reportParts.push(`Number of students: ${totalStudents}`);

    Object.entries(studentGroups).forEach(([field, group]) => {
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`
      );
    });

    resolve(reportParts.join('\n'));
  });
});

// Define the root route that sends a welcome message
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route that sends a report of the students
app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.status(200).send(responseText);
    })
    .catch((err) => {
      responseParts.push(err.message);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.status(200).send(responseText);
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
