import React from 'react';
import ProductCard from './ProductCard';

function ListProductsCards(products) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard product={ product } index={ index } key={ product.id } />
      ))}
    </div>
  );
}

export default ListProductsCards;
