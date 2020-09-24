const rescue = require('express-rescue');
const { usersService } = require('../services');

const registerUserController = rescue(async (req, res) => {
  const { name, email, password, seller } = req.body;

  const role = seller ? 'administrator' : 'client';

  const user = await usersService.registerUser(name, email, password, role);

  if (user.err) {
    return res.status(400).json(user);
  }

  return res.status(200).json(user);
});

module.exports = registerUserController;
