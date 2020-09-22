const { generateJWT } = require('../middlewares');
const { usersModel } = require('../models');

const userLogin = async (email, password) => {
  const user = await usersModel.getUserByEmail(email);

  if (!user || user.password !== password) {
    return {
      err: { code: 'invalid_entries', message: 'Wrong email or password' },
    };
  }

  const { token } = generateJWT(user);

  return {
    name: user.name,
    email: user.email,
    token,
    role: user.role,
  };
};

module.exports = {
  userLogin,
};
