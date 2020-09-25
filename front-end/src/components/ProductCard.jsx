import React, { useState, useEffect } from 'react';

function ProductCard({ product, index }) {
  const { name, image, price } = product;
  const [amount, setAmount] = useState(0);

  const updateProductAmount = (e) => {
    const value = e.target.innerText;

    if (value === '+') return setAmount((state) => state + 1);
    else if (value === '-' && amount > 0)
      return setAmount((state) => state - 1);

    return null;
  };

  const addToCart = (productToAdd) => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart && productToAdd.amount > 0) {
      return localStorage.setItem('cart', JSON.stringify([productToAdd]));
    } else if (cart && productToAdd.amount > 0) {
      const newCart = cart.filter(({ id }) => id !== productToAdd.id);

      return localStorage.setItem(
        'cart',
        JSON.stringify([...newCart, productToAdd])
      );
    } else if (cart && productToAdd.amount === 0) {
      const newCart = cart.filter(({ id }) => id !== productToAdd.id);

      return localStorage.setItem('cart', JSON.stringify([...newCart]));
    }

    return null;
  };

  useEffect(() => {
    const productToAdd = { ...product, amount };
    addToCart(productToAdd);
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
        >{`R$ ${price.toFixed(2)}`}</p>
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
