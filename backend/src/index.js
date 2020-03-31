const express = require('express');
const routes = require('./routes');

const app = express();

//para obter  o request.body no formato jason
app.use(express.json());
app.use(routes);

app.listen(3333);