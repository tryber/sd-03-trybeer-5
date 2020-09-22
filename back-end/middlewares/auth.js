const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const generateJWT = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return { token };
};

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'missing auth token' });

  try {
    const decoded = jwt.verify(token, secret);

    const {
      data: { email },
    } = decoded;

    const user = await usersModel.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'invalid token' });
    }

    const { password, ...userData } = user;

    req.user = userData;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  generateJWT,
  validateJWT,
};
