const express = require('express');
const routes = express.Router();
const AboutController = require('./controllers/AboutController');

routes.get('/about', AboutController.index)

module.exports = routes;