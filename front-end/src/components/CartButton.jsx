import React from 'react';
import PropTypes from 'prop-types';

function CartButton({ totalPrice }) {
  return (
    <div className="fixed-bottom cart-content">
      <a href="/checkout">
        <button
          type="button"
          className="btn btn-primary cart-button"
          data-testid="checkout-bottom-btn"
          disabled={totalPrice === '0,00'}
        >
          Ver Carrinho{' '}
          <span data-testid="checkout-bottom-btn-value">{`R$ ${totalPrice}`}</span>
        </button>
      </a>
    </div>
  );
}

export default CartButton;

CartButton.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};
