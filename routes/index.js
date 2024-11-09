const routes = require('express').Router();
const jokes = require('../controllers/');

routes.get('/', jokes.displayJoke); // http://localhost:300/
//routes.get('/jokes', jokes.displayJoke); // http://localhost:300/jokes// este es un ejemplo 

module.exports = routes;
