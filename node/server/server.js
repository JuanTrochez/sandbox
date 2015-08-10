var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Salut ! Voici mon premier serveur avec nodeJS');
});
server.listen(8080);
