var express = require("express"); // importa o express
var consign = require("consign"); // importa o consign

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes') // carrega as rotas no autoload, de forma automatica e pratica
    .then('config/dbConnection.js') // executa a conexão com o banco de dados 
    .into(app); 

module.exports = app;