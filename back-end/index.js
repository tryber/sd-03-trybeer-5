require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { loginController, registerUserController } = require('./controllers');

const PORT = process.env.API_PORT;

const app = express();

app.use(bodyParser.json());

app.post('/login', loginController);

app.post('/register', registerUserController);

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
