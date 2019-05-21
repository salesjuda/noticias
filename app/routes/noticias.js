module.exports = function(app){

    app.get('/noticias', function(req, res){

    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });

    connection.query('SELECT * FROM noticias', function(error, result){
        res.render("noticias/noticias", {noticias : result});
        });
    });
};

// se der um erro de autenticação na conexão com o banco de dados, rodar o seguinte comando na administração do mysql
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua senha'