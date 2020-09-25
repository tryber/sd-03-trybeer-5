import React, { useEffect, useState } from 'react';
import CartButton from '../components/CartButton';
import ListProductsCards from '../components/ListProductsCards';
import getAllProducts from '../services/productsApi';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const { token } = JSON.parse(localStorage.getItem('user'));

  const fetchAllProducts = async () =>
    getAllProducts(token).then((products) => setProducts(products));

  const getTotalPrice = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart.length > 0) {
      const total = cart.reduce(
        (total, { price, amount }) => (total += price * amount),
        0
      );
      return setTotalPrice(10);
    }
    return setTotalPrice(0.0);
  };

  useEffect(() => getTotalPrice());

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="ProductsPage">
      {products.length > 0 ? (
        <div>
          <ListProductsCards products={products} />
          <CartButton totalPrice={totalPrice} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ProductsPage;
