const saveToLocalStorage = (info, name = 'user') => {
  localStorage.setItem(name, JSON.stringify(info));
};

const getFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));
const getCartFromLocalStorage = () => JSON.parse(localStorage.getItem('cart'));
module.exports = { saveToLocalStorage, getFromLocalStorage, getCartFromLocalStorage };

