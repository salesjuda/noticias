var http = require('http');

var servidor = http.createServer(function(req, res){
    res.end("<html><body>Olá Node.js</body></html>")
});
servidor.listen(3000);