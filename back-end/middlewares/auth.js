const jwt = require('jsonwebtoken');
const usersModel = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'trybeer05';

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

  if (!token) {
    return res
      .status(401)
      .json({ err: { code: 'missing_token', message: 'Missing auth token.' } });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const {
      data: { email },
    } = decoded;

    const user = await usersModel.getUserByEmail(email);

    if (!user) {
      return res
        .status(401)
        .json({ err: { code: 'invalid_toke', message: 'Invalid token.' } });
    }

    const { password, ...userData } = user;

    req.user = userData;

    return next();
  } catch (err) {
    return res
      .status(401)
      .json({ err: { code: 'invalid_token', message: 'jwt malformed' } });
  }
};

module.exports = {
  generateJWT,
  validateJWT,
};
