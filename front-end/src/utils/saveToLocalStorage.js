const saveToLocalStorage = (info, name = 'user') => {
  localStorage.setItem(name, JSON.stringify(info));
};

const getCartFromLocalStorage = () => JSON.parse(localStorage.getItem('cart'));

module.exports = { saveToLocalStorage, getCartFromLocalStorage };
