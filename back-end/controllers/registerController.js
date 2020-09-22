const rescue = require('express-rescue');
const { usersService } = require('../services');

const registerController = rescue(async (req, res) => {
  const { name, email, password, seller } = req.body;
  const role = seller ? 'administrator' : 'client';

  await usersService.registerUser(name, email, password, role);

  res.status(201).redirect('/localhost:3000/products');
});

module.exports = registerController;
