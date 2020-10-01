import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ order, index }) {
  const { orderNumber, totalPrice, saleDate } = order;
  return (
    <div className="card" data-testid={`${index}-order-card-container`}>
      <div className="card-body">
        <h5
          className="card-title"
          data-testid={`${index}-order-number`}
        >{`Pedido ${orderNumber}`}</h5>
        <h6 className="card-text" data-testid={`${index}-order-date`}>
          {saleDate}
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
