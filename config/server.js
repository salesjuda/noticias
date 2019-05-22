var express = require("express"); // importa o express
var consign = require("consign"); // importa o consign

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes').into(app); //faz um scam de todos os arquivos que estão na pasta routes e inclue essas rodas dentro do app(servidor).
module.exports = app;