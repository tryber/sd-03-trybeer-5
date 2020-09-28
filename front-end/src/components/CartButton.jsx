import React from 'react';

function CartButton({ totalPrice }) {
  return (
    <div className="fixed-bottom cart-content">
      <a href="/checkout">
        <button type="button" className="btn btn-primary cart-button">
          Ver Carrinho <span>{`R$ ${totalPrice}`}</span>
        </button>
      </a>
    </div>
  );
}

export default CartButton;
