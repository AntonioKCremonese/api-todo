const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const conexao = require('./dao/connectionMongo');
const routes = require('./routes/routes')(server);

server.listen(3000, console.log("Servidor Rodando na porta 3000"));