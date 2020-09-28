import React from 'react';
import ProductCard from './ProductCard';

function ListProductsCards({ products, totalPrice }) {
  return (
    <div className="cards-list">
      {products.map((product, index) => (
        <ProductCard product={product} index={index} key={product.id} totalPrice={totalPrice} />
      ))}
    </div>
  );
}

export default ListProductsCards;
