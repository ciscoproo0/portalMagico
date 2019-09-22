const express = require('express');
const Cards = require('./controllers/Cards')
const routes = express.Router();

routes.get('/cards', Cards.index);
routes.post('/cards', Cards.store);

module.exports = routes;