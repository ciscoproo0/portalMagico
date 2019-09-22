const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

server.use(cors());

server.use(express.json());

mongoose.connect('mongodb+srv://ciscoproo0:Cisco141290@cluster0-zxsfz.mongodb.net/portalmagico?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(routes);

server.listen(3000);