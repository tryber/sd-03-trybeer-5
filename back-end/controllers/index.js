const usersController = require('./usersController');
const clientsController = require('./clientsController');

module.exports = {
  loginController: usersController.userLogin,
  registerUserController: usersController.registerUser,
  updateClientNameController: clientsController.updateClientName,
};
