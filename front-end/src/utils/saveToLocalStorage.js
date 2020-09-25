const saveToLocalStorage = (info) => {
  localStorage.setItem('user', JSON.stringify(info));
};

module.exports = { saveToLocalStorage };