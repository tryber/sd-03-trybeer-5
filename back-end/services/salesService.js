const { salesModel } = require('../models');

const registerSale = async (
  userId,
  totalPrice,
  delivery,
  saleDate,
  status,
  products,
) => {
  const { address, number } = delivery;

  const sale = await salesModel.registerSale(
    userId,
    totalPrice,
    address,
    number,
    saleDate,
    status,
  );

  const saleId = sale.getAutoIncrementValue();

  if (!sale) {
    return {
      err: {
        code: 'invalid_entries',
        message: 'The sale could not be registered',
      },
    };
  }

  await Promise.all(
    products.map(({ id, amount }) => salesModel.registerProductSold(saleId, id, amount)),
  );

  return { message: 'Compra realizada com sucesso!' };
};

const updateOrderStatus = async (id) => salesModel.updateOrderStatus(id);

module.exports = {
  registerSale,
  updateOrderStatus,
};
