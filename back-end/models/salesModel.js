const connection = require('./connection');

const registerSale = async (
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  saleDate,
  status,
) => connection().then((db) => db
  .getTable('sales')
  .insert([
    'user_id',
    'total_price',
    'delivery_address',
    'delivery_number',
    'sale_date',
    'status',
  ])
  .values(
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  )
  .execute());

const registerProductSold = async (saleId, productId, quantity) => connection().then((db) => db
  .getTable('sales_products')
  .insert(['sale_id', 'product_id', 'quantity'])
  .values(saleId, productId, quantity)
  .execute());

const getAllOrders = async () => connection()
  .then((db) => db
    .getTable('sales')
    .select([
      'id',
      'total_price',
      'delivery_address',
      'delivery_number',
      'status',
    ])
    .execute())
  .then((result) => result.fetchAll())
  .then((orders) => orders.map(
    ([
      orderNumber,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    ]) => ({
      orderNumber,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
    }),
  ));

module.exports = {
  registerSale,
  registerProductSold,
  getAllOrders,
};
