const rescue = require('express-rescue');
const { salesService } = require('../services');

const registerSale = rescue(async (req, res) => {
  const { userId, totalPrice, delivery, saleDate, status, products } = req;

  const sale = await salesService.registerSale(
    userId,
    totalPrice,
    delivery,
    saleDate,
    status,
    products,
  );

  if (sale.err) return res.status(422).json(sale);

  return res.status(201).json(sale);
});

const getAllClientOrders = rescue(async (req, res) => {
  const { id } = req.query;

  const orders = await salesService.getAllClientOrders(id);

  return res.status(200).json(orders);
});

module.exports = {
  registerSale,
  getAllClientOrders,
};
