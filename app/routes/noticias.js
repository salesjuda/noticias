module.exports = function(app){

    app.get('/noticias', function(req, res){

// executando a função de conexão do banco de dados que está no config e foi importado no require
        var connection = app.config.dbConnection(); 
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    });


    app.get('/noticia', function(req, res){

// executando a função de conexão do banco de dados que está no config e foi importado no require
        var connection = app.config.dbConnection(); 
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        
        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticia : result});
        });
    });

};

// se der um erro de autenticação na conexão com o banco de dados, rodar o seguinte comando na administração do mysql
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'