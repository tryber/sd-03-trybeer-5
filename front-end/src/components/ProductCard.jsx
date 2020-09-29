import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';
import getCartFromLocalStorage from '../utils/getCartFromLocalStorage';

function ProductCard({ product, index, getTotalPrice }) {
  const { name, image, price } = product;
  const [amount, setAmount] = useState(0);

  const existsInCart = () => {
    const cart = getCartFromLocalStorage();

    if (!cart || cart.length === 0) return null;

    cart.forEach(({ id, amount: qnt }) =>
      id === product.id ? setAmount(qnt) : null
    );
  };

  const updateProductAmount = (e) => {
    const value = e.target.innerText;

    if (value === '+') return setAmount((state) => state + 1);
    else if (value === '-' && amount > 0)
      return setAmount((state) => state - 1);

    return null;
  };

  const updateCart = (productToAdd) => {
    const cart = getCartFromLocalStorage();

    if (!cart && productToAdd.amount > 0) {
      // cria carrinho
      localStorage.setItem('cart', JSON.stringify([productToAdd]));
    } else if (cart && productToAdd.amount === 0) {
      // remove do carrinho
      const newCart = cart.filter(({ id }) => id !== productToAdd.id);
      localStorage.setItem('cart', JSON.stringify([...newCart]));
    } else if (cart && productToAdd.amount > 0) {
      // adiciona a carrinho existente
      const newCart = cart.filter(({ id }) => id !== productToAdd.id);
      localStorage.setItem('cart', JSON.stringify([...newCart, productToAdd]));
    } else {
      return null;
    }
  };

  useEffect(() => {
    existsInCart();
  }, []);

  useEffect(() => {
    const productToAdd = { ...product, amount };

    updateCart(productToAdd);
    getTotalPrice();
  }, [amount]);

  return (
    <div className="card product-card">
      <img
        className="card-img-top img-card"
        data-testid={`${index}-product-img`}
        src={image}
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title" data-testid={`${index}-product-name`}>
          {name}
        </h5>
        <p
          className="card-text"
          data-testid={`${index}-product-price`}
        >{`R$ ${formatPrice(price)}`}</p>
        <button
          className="btn btn-primary"
          data-testid={`${index}-product-plus`}
          type="button"
          onClick={(event) => updateProductAmount(event)}
        >
          +
        </button>
        <span
          className="card-text product-qtd"
          data-testid={`${index}-product-qtd`}
        >
          {amount}
        </span>
        <button
          className="btn btn-primary"
          data-testid={`${index}-product-minus`}
          type="button"
          onClick={(event) => updateProductAmount(event)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  index: PropTypes.number,
  getTotalPrice: PropTypes.func.isRequired,
};
