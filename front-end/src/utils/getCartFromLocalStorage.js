const getCartFromLocalStorage = () => JSON.parse(localStorage.getItem('cart'));

module.exports = { getCartFromLocalStorage };
