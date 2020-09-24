const getAllProducts = fetch(
  'http://localhost:3001/products'
).then((response) =>
  response
    .json()
    .then((json) =>
      response.ok ? Promise.resolve(json) : Promise.reject(json)
    )
).then((results) => results);

export default getAllProducts;
