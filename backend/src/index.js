const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//qual endereço pode acessar nossa aplicaçao.
app.use(cors(/*ex: http://meuapp.com*/));
//para obter  o request.body no formato jason
app.use(express.json());
app.use(routes);

app.listen(3333);