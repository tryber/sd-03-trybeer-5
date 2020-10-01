import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function ListOrdersCards({ orders }) {
  return (
    <div className="cards-list">
      {orders.map((order, index) => (
        <ProductCard order={order} index={index} key={order.orderNumber} />
      ))}
    </div>
  );
}

export default ListOrdersCards;

ListOrdersCards.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      orderNumber: PropTypes.number,
      totalPrice: PropTypes.number,
      saleDate: PropTypes.number,
    })
  ).isRequired,
};
