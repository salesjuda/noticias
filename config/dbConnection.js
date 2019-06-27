var mysql = require('mysql');

var connMySQL = function(){

    return mysql.createConnection({ // cria a conexão com o banco de dados
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
  });
}
  module.exports = function(){
    return connMySQL;
}