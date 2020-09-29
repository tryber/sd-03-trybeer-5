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
    products.forEach(({ id: { productId }, quantity }) =>
      salesModel.registerProductSold(saleId, productId, quantity)),
  );

  return { message: 'Compra realizada com sucesso!' };
};

module.exports = {
  registerSale,
};
