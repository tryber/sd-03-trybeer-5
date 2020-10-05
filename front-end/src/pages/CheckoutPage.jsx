import React, {useEffect, useState} from 'react';
import { checkOut } from '../services/checkoutService';

function CheckoutPage() {
  const [orderTotalValue, setOrderTotalValue] = useState('0,00');
  const [rua, setRua] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');
  const [ableToSubmit, setAbleToSubmit] = useState(false);
  const storageCart = JSON.parse(localStorage.getItem('cart')) || [];
  const storageUser = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    if (!storageUser.id) window.location.href = '/login';
    setTotalValue();

    if (storageCart.length > 0 && rua && numeroCasa) {
      setAbleToSubmit(true);
    }
  }, [orderTotalValue, rua, numeroCasa]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { id, token } = storageUser;
    const delivery = {address: rua, number: numeroCasa};
    const saleDate = new Date().toISOString().replace('T', ' ').replace('Z', '');
    const status = "Pendente";

    const checkoutResponse = await checkOut(token, id, parseFloat(orderTotalValue.replace(',', '.')), delivery, saleDate, status, storageCart);

    if(!checkoutResponse.err) {
      localStorage.removeItem('cart');
      window.location.href = '/products?msg=Compra realizada com sucesso!';
    }

  }

  function deleteProduct(index) {
    storageCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storageCart));
    setTotalValue();
  }

  function setTotalValue() {
    let totalValue = 0;
    storageCart.map((el) => (totalValue += el.amount * el.price));
    setOrderTotalValue(totalValue.toFixed(2).toString().replace('.', ','));
  }

  return (
    <div className="CheckoutPage">
      <div className="container">
        <h3>Produtos</h3>
        {storageCart.length > 0 ? (
          storageCart.map((el, index) => (
            <div className="card d-flex" id={`product-${index}`} key={index}>
              <span
                className="amount"
                data-testid={`${index}-product-qtd-input`}
              >
                {el.amount}
              </span>
              <h4 className="name" data-testid={`${index}-product-name`}>
                {el.name}
              </h4>
              <p
                className="total-product-price"
                data-testid={`${index}-product-total-value`}
              >
                R$ {(el.price * el.amount).toFixed(2).toString().replace('.', ',')}
              </p>
              <p
                className="unit-price"
                data-testid={`${index}-product-unit-price`}
              >
                (R$ {el.price.toFixed(2).toString().replace('.', ',')} un)
              </p>
              <button
                data-testid={`${index}-removal-button`}
                onClick={() => deleteProduct(index)}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <h3>Não há produtos no carrinho</h3>
        )}

        <div className="float-right">
          <h3>
            Total:
            <span data-testid="order-total-value">R$ {orderTotalValue}</span>
          </h3>
        </div>

        <div className="address-content">
          <h3>Endereço</h3>
          <form method="POST" onSubmit={handleSubmit} className="address-form">
            <div className="form-group">
              <label htmlFor="name">
                Rua
                <input
                  data-testid="checkout-street-input"
                  className="form-control"
                  type="text"
                  name="rua"
                  id="rua"
                  onChange={(e) => setRua(e.target.value)}
                  value={rua}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Número da casa
                <input
                  data-testid="checkout-house-number-input"
                  className="form-control"
                  type="text"
                  name="numeroCasa"
                  id="numeroCasa"
                  onChange={(e) => setNumeroCasa(e.target.value)}
                  value={numeroCasa}
                  required
                />
              </label>
            </div>
            <div className="fixed-bottom cart-content">
              <input
                type="submit"
                value="Finalizar Pedido"
                disabled={!ableToSubmit}
                data-testid="checkout-finish-btn"
                className="btn-lg btn-primary cart-button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
