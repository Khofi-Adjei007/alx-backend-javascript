const fs = require('fs');

/**
 * Reads a CSV file containing student data and prints a report.
 * @param {string} dataPath - Path to the CSV file.
 * @throws {Error} If the file does not exist or is not a valid file.
 */
const countStudents = (dataPath) => {
  // Check if the file exists and is a valid file
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read and process the file content
  const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, -1);

  // Group students by their field
  for (const line of fileLines.slice(1)) {
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
  }

  // Calculate the total number of students
  const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  // Print the number of students in each field and their names
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
