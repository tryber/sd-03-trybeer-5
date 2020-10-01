const getAllClientOrders = async (id, token) => {
  console.log(id, token);
  const response = await fetch(`http://localhost:3001/orders?id=${id}`, {
    headers: { authorization: token },
  });
  const orders = await response.json();
  return orders;
};

export default getAllClientOrders;
