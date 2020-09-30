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

module.exports = {
  registerSale,
};
