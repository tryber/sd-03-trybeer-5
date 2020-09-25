import React from 'react';

function CartButton({ totalPrice }) {
  return (
    <div>
      <button type="button" className="btn btn-primary cart-button">
        Ver Carrinho <span>{`R$ ${totalPrice}`}</span>
      </button>
    </div>
  );
}

export default CartButton;
