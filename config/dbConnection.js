var mysql = require('mysql');

module.exports = function(){ // exporta o modulo
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
  });
}