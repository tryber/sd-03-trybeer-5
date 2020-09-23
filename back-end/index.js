require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  loginController,
  registerUserController,
  updateClientNameController,
} = require('./controllers');

const PORT = process.env.API_PORT;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post('/login', loginController);

app.post('/register', registerUserController);

app.post('/update-client-name', updateClientNameController);

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
