const express = require('express');
const users = require('./controllers/users');

const routes = express();

routes.post('/usuarios', users.cadastrarUsuario);


module.exports = routes;