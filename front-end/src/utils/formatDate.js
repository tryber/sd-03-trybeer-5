const formatDate = (date) => {
  const formatedDate = new Date(date);
  const day = formatedDate.getDate().toString();
  const month = (formatedDate.getMonth() + 1).toString();
  const formatedDay = day.length === 1 ? '0' + day : day;
  const formatedMonth = month.length === 1 ? '0' + month : month;
  return formatedDay + '/' + formatedMonth;
};

module.exports = formatDate;
