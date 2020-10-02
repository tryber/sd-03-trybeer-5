const { userLogin, registerUser } = require('./usersController');
const { updateClientName } = require('./clientsController');
const { getAllProducts } = require('./productsController');
const { registerSale, getAllOrders, getAllClientOrders, updateOrderStatus } = require('./salesController');

module.exports = {
  userLogin,
  registerUser,
  updateClientName,
  getAllProducts,
  registerSale,
  getAllOrders,
  getAllClientOrders,
  updateOrderStatus,
};
