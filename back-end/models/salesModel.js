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

const getAllClientOrders = async (id) => connection()
  .then((db) => db
    .getTable('sales')
    .select(['id', 'total_price', 'sale_date'])
    .where('user_id = :id')
    .bind('id', id)
    .execute())
  .then((results) => results.fetchAll())
  .then((orders) => orders.map(([orderNumber, totalPrice, saleDate]) => ({
    orderNumber,
    totalPrice,
    saleDate,
  })));

const updateOrderStatus = async (id) => connection().then((db) => db
  .getTable('sales')
  .update()
  .set('status', 'Entregue')
  .where('id = :id')
  .bind('id', id)
  .execute());

module.exports = {
  registerSale,
  registerProductSold,
  getAllClientOrders,
  updateOrderStatus,
};
