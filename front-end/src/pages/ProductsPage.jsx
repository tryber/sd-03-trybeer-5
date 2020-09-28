import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CartButton from '../components/CartButton';
import ListProductsCards from '../components/ListProductsCards';
import getAllProducts from '../services/productsApi';
import formatPrice from '../utils/formatPrice';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user ? user.token : '';
  //if (!user.token) return <Redirect to="/login" />;

  const fetchAllProducts = async () =>
    getAllProducts(token).then((products) => setProducts(products));

  const getTotalPrice = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart && cart.length > 0) {
      const total = cart.reduce(
        (total, { price, amount }) => (total += price * amount),
        0
      );
      const price = formatPrice(total);
      return setTotalPrice(price);
    }
    return setTotalPrice('0,00');
  };

  useEffect(() => getTotalPrice());

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (products.err) return <Redirect to="/login" />;

  return (
    <div>
      {products.length > 0 ? (
        <div className="product-page">
          <ListProductsCards products={products} totalPrice={getTotalPrice} />
          <CartButton totalPrice={totalPrice} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ProductsPage;
