require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { loginController, registerController } = require('./controllers');

const PORT = process.env.API_PORT;

const app = express();

app.use(bodyParser.json());

app.post('/login', loginController);

app.post('/register', registerController);

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
