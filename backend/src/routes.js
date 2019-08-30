const express = require('express');
const Cards = require('./controllers/Cards')
const routes = express.Router();

routes.post('/cards', Cards.index);

module.exports = routes;