const { userLogin, registerUser } = require('./usersController');
const { updateClientName } = require('./clientsController');
const { getAllProducts } = require('./productsController');
const { registerSale, getAllOrders } = require('./salesController');

module.exports = {
  userLogin,
  registerUser,
  updateClientName,
  getAllProducts,
  registerSale,
  getAllOrders,
};
