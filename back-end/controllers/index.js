const { userLogin, registerUser } = require('./usersController');
const { updateClientName } = require('./clientsController');
const { getAllProducts } = require('./productsController');
const { registerSale, updateOrderStatus } = require('./salesController');

module.exports = {
  userLogin,
  registerUser,
  updateClientName,
  getAllProducts,
  registerSale,
  updateOrderStatus,
};
