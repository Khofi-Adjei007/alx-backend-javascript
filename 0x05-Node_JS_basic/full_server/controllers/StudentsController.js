import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains route handlers for student-related endpoints.
 */
class StudentsController {
  /**
   * Handles the request to get all students and sends the list in the response.
   * @param {Express.Request} request - The Express request object.
   * @param {Express.Response} response - The Express response object.
   */
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        // Comparison function for ordering student groups alphabetically
        const cmpFxn = (a, b) => {
          const nameA = a[0].toLowerCase();
          const nameB = b[0].toLowerCase();
          return nameA.localeCompare(nameB);
        };

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push(
            `Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`
          );
        }

        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Handles the request to get students by major and sends the list in the response.
   * @param {Express.Request} request - The Express request object.
   * @param {Express.Response} response - The Express response object.
   */
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }

        response.status(200).send(responseText);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
