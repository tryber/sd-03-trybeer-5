require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
  userLogin,
  registerUser,
  updateClientName,
  getAllProducts,
} = require('./controllers');
const { validateJWT } = require('./middlewares');
const { connection } = require('./models');

const PORT = process.env.API_PORT || 3001;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/login', userLogin);

app.post('/register', registerUser);

app.post('/update-client-name', validateJWT, updateClientName);

app.get('/products', getAllProducts);

app.listen(PORT, () => console.log(`Listen on ${PORT}`));

connection().then(() => console.log('Conectado ao banco'));
