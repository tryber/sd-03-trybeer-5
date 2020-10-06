import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { getOneOrder } from '../services/ordersService';
import formatDate from '../utils/formatDate';
import { getFromLocalStorage } from '../utils/saveToLocalStorage';

function ClientOrderDetail() {
  const [order, setOrder] = useState({});
  const user = getFromLocalStorage();

  const token = user ? user.token : '';
  const id = user ? user.id : '';

  const fetchOrder = async () =>
    getOneOrder(id, token).then((result) => setOrder(result));

  useEffect(() => {
    fetchOrder();
  }, []);

  if (!user) return <Redirect to="/login" />;

  return (
    <div className="container">
      {console.log(order)}
      <div className="card checkout-card">
        <div className="card-header">
          <h3
            className="card-text"
            data-testid="order-number"
          >{`Pedido: ${' '}`}</h3>
          <p className="card-text" data-testid="order-date">
            {formatDate()}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div>
              <h4 data-testid={`${' '}-product-name`}>{`${' '}`}</h4>
              <p data-testid={`${' '}-product-qtd`}>{`Quantidade: ${' '}`}</p>
              <p data-testid={`${' '}-product-total-value`}>
                {`Total do produto: R$ ${' '}`}
                {/* {(el.price * el.amount)
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')} */}
              </p>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <h4 data-testid={`${' '}-product-name`}>{`${' '}`}</h4>
              <p data-testid={`${' '}-product-qtd`}>{`Quantidade: ${' '}`}</p>
              <p data-testid={`${' '}-product-total-value`}>
                {`Total do produto: R$ ${' '}`}
                {/* {(el.price * el.amount)
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')} */}
              </p>
            </div>
          </li>
        </ul>
        <div className="card-footer">
          <h3 className="card-text" data-testid="order-total-value">
            {`Total: R$ ${' '}`}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ClientOrderDetail;
