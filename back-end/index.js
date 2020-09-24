require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.API_PORT || 3001;

const {
  loginController,
  registerUserController,
  updateClientNameController,
} = require('./controllers');
const { validateJWT } = require('./middlewares');
const { connection } = require('./models');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/login', loginController);

app.post('/register', registerUserController);

app.post('/update-client-name', validateJWT, updateClientNameController);

app.listen(PORT, () => console.log(`Listen on ${PORT}`));

connection().then(() => console.log('Conectado ao banco'));
