var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Mime type HTML</title>'+
'    </head>'+
'	 <body>');

	if (page == '/') {
		res.write('Page d\'accueil');
	} else if (page == '/page1') {
		res.write('Vous êtes dans la page 1');
	} else if (page == '/page1/test') {
		res.write('Vous êtes arrivés a la page "test" via la page 1');
	} else if (page == '/person') {
		res.write('Vous êtes à la page personne : <br/>');
		if ('prenom' in params && 'nom' in params) {
			res.write('Prénom : ' + params['prenom'] + '<br/>Nom : ' + params['nom']);
		} else {
			res.write('Rentrez des paramètres noms et prénom pour les afficher ici !');
		}
	} else {
		res.write('<h1>Error 404 :</h1><p>La page demandée n\'existe pas !</p>');
	}

    res.write('</body>'+
'</html>');
    
    res.end();

});
server.listen(8080);
