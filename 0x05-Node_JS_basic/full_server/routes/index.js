import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps routes to their respective controller methods.
 * @param {Express.Application} app - The Express application instance.
 */
const mapRoutes = (app) => {
  // Route for the homepage
  app.get('/', AppController.getHomepage);

  // Route to get all students
  app.get('/students', StudentsController.getAllStudents);

  // Route to get students by major
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
