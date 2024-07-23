/**
 * Controller for handling miscellaneous routes.
 */
class AppController {
  /**
   * Handles the request to get the homepage.
   * @param {Express.Request} request - The Express request object.
   * @param {Express.Response} response - The Express response object.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
