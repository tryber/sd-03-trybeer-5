import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import CartButton from '../components/CartButton';
import ListProductsCards from '../components/ListProductsCards';
import getAllProducts from '../services/productsService';
import formatPrice from '../utils/formatPrice';
import { getCartFromLocalStorage, getFromLocalStorage } from '../utils/saveToLocalStorage';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const [successMessage, setSuccessMessage] = useState('');
  const user = getFromLocalStorage();
  const token = user ? user.token : '';
  const lengthValidation = 0;

  const fetchAllProducts = async () =>
    getAllProducts(token).then((result) => setProducts(result));

  const getTotalPrice = () => {
    const cart = getCartFromLocalStorage();

    if (cart && cart.length > lengthValidation) {
      const total = cart.reduce(
        (acc, { price, amount }) => (acc += price * amount),
        lengthValidation
      );
      const price = formatPrice(total);
      return setTotalPrice(price);
    }
    return setTotalPrice('0,00');
  };

  useEffect(() => getTotalPrice(), []);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const message = urlParams.get('msg')
    setSuccessMessage(message);
  }, [])

if (!user) return <Redirect to="/login" />;

  return (
    <div>
      <span className="center">{successMessage}</span>
      {products.length > lengthValidation ? (
        <div className="product-page">
          <ListProductsCards
            products={products}
            getTotalPrice={getTotalPrice}
          />
          <CartButton totalPrice={totalPrice} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ProductsPage;
