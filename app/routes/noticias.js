module.exports = function(app){

    app.get('/noticias', function(req,res){

        app.app.controllers.noticias.noticias(app, req, res);

    });

    app.get('/noticia', function(req,res){

        app.app.controllers.noticias.noticia(app, req, res);

    });
}
// se der um erro de autenticação na conexão com o banco de dados, rodar o seguinte comando na administração do mysql
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'