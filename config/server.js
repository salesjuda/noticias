var express = require("express"); // importa o express
var consign = require("consign"); // importa o consign
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('app/routes') // carrega as rotas no autoload, de forma automatica e pratica
    .then('config/dbConnection.js') // executa a conexão com o banco de dados 
    .then('app/models')
    .into(app); 

module.exports = app;