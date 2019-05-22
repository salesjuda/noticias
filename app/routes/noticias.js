var dbConnection = require('../../config/dbConnection'); // require do modulo dbConnection que está dentro de config e faz a conexão com o banco

module.exports = function(app){

    var connection = dbConnection(); // executando a função

        app.get('/noticias', function(req, res){
            
        connection.query('SELECT * FROM noticias', function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    });
};

// se der um erro de autenticação na conexão com o banco de dados, rodar o seguinte comando na administração do mysql
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua senha'