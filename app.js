var app = require('./config/server');
         

// importanto as rotas da pasta routes

    //var rotaHome = require('./app/routes/home')(app);

    //var rotaNoticias = require('./app/routes/noticias')(app);

    //var rotaFormularioInclusaoNoticias = require('./app/routes/formulario_inclusao_noticias')(app);



        // escutar o servidor na portal 3000 //
app.listen(3000, function(){
    console.log('Servidor On');  // mostra uma mensagem no terminal e no console do navegador //
});