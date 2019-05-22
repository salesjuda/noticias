var mysql = require('mysql');

module.exports = function(){ // exporta o modulo
    return mysql.createConnection({ // cria a conexão com o banco de dados
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
  });
}