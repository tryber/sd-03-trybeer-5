const rescue = require('express-rescue');
const { salesService } = require('../services');

const registerSale = rescue(async (req, res) => {
  const { userId, totalPrice, delivery, saleDate, status, products } = req.body;

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

const updateOrderStatus = rescue(async (req, res) => {
  const { id } = req.params;

  await salesService.updateOrderStatus(id);

  return res.status(200).json({ message: 'Atualizado com sucesso' });
});

module.exports = {
  registerSale,
  updateOrderStatus,
};
