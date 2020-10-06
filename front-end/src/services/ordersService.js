export const getAllClientOrders = async (id, token) => {
  const response = await fetch(`http://localhost:3001/orders?id=${id}`, {
    headers: { authorization: token },
  });
  const orders = await response.json();
  return orders;
};

export const getOneOrder = async (id, token) => fetch(`http://localhost:3001/search/${id}`, {
  headers: { authorization: token },
})
  .then((response) => response.json())
  .then((order) => order);
