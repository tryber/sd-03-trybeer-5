const { generateJWT } = require('../middlewares');
const { usersModel } = require('../models');

const userLogin = async (email, pass) => {
  const user = await usersModel.getUserByEmail(email);

  if (!user || user.password !== pass) {
    return {
      err: { code: 'invalid_entries', message: 'Wrong email or password' },
    };
  }

  const { password, ...userData } = user;

  const { token } = generateJWT(userData);

  return {
    name: user.name,
    email: user.email,
    token,
    role: user.role,
  };
};

const registerUser = async (name, email, password, role) => {
  await usersModel.registerUser(name, email, password, role);
};

module.exports = {
  userLogin,
  registerUser,
};
