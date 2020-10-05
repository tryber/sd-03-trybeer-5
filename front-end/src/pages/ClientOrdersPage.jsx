import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import getAllClientOrders from '../services/ordersService';
import { getFromLocalStorage } from '../utils/saveToLocalStorage';
import ListOrdersCards from '../components/ListOrdersCards';

function ClientOrdersPage() {
  const [orders, setOrders] = useState(null);
  const user = getFromLocalStorage();
  const lengthValidation = 0;

  const token = user ? user.token : '';
  const id = user ? user.id : '';

  const fetchAllOrders = async () =>
    getAllClientOrders(id, token).then((result) => setOrders(result));

  useEffect(() => {
    fetchAllOrders();
  }, []);

  if (!user) return <Redirect to="/login" />;

  return (
    <div>
      {orders && orders.length > lengthValidation ? (
        <ListOrdersCards orders={orders} />
      ) : (
        <h1 className="text-center">
          {orders && orders.length === 0
            ? 'Nenhum pedido registrado'
            : 'Loading...'}
        </h1>
      )}
    </div>
  );
}

export default ClientOrdersPage;
