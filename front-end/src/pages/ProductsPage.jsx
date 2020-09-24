import React, { useEffect, useState } from 'react';
import ListProductsCards from '../components/ListProductsCards';
import getAllProducts from '../services';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  //const { token } = localStorage.getItem('user');
  /*
, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    }
*/

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
  }, []);

  return (
    <div className="ProductsPage">
      testte
      {/* <ListProductsCards products={products} /> */}
    </div>
  );
}

export default ProductsPage;
