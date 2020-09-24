import React from 'react';

function ProductCard(product, index) {
  const { name, image, price } = product;
  return (
    <div className="product-card">
      <span data-testid={`${index}-product-name`}>{name}</span>
      <img data-testid={`${index}-product-img`} src={image} alt={name} />
      <span data-testid={`${index}-product-price`}>
        {`R$ ${price.toFixed(2)}`}
      </span>
      <button data-testid={`${index}-product-plus`} type="button">
        +
      </button>
      <button data-testid={`${index}-product-minus`} type="button">
        -
      </button>
    </div>
  );
}

export default ProductCard;
