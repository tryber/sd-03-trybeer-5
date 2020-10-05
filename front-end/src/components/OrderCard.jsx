import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';

function OrderCard({ order, index }) {
  const { orderNumber, totalPrice, saleDate } = order;
  //const formatedDate = new Date(saleDate);
  return (
    <div className="card product-card" data-testid={`${index}-order-card-container`}>
      <div className="card-body">
        <h5
          className="card-title"
          data-testid={`${index}-order-number`}
        >{`Pedido ${orderNumber}`}</h5>
        <h6 className="card-text" data-testid={`${index}-order-date`}>
          {formatDate(saleDate)}
        </h6>
        <h5 className="card-text" data-testid={`${index}-order-total-valueu`}>{totalPrice}</h5>
      </div>
    </div>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  order: PropTypes.shape({
    orderNumber: PropTypes.number,
    totalPrice: PropTypes.number,
    saleDate: PropTypes.number,
  }).isRequired,
  index: PropTypes.number,
};
