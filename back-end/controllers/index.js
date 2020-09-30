const { userLogin, registerUser } = require('./usersController');
const { updateClientName } = require('./clientsController');
const { getAllProducts } = require('./productsController');
const { registerSale, getAllClientOrders } = require('./salesController');

module.exports = {
  userLogin,
  registerUser,
  updateClientName,
  getAllProducts,
  registerSale,
  getAllClientOrders,
};
