const { userLogin, registerUser } = require('./usersController');
const { updateClientName } = require('./clientsController');
const { getAllProducts } = require('./productsController');

module.exports = {
  userLogin,
  registerUser,
  updateClientName,
  getAllProducts,
};
