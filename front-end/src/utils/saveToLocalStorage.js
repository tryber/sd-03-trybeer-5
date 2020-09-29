const saveToLocalStorage = (info) => {
  localStorage.setItem('user', JSON.stringify(info));
};

const getFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

module.exports = { saveToLocalStorage, getFromLocalStorage };