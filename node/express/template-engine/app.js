var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index', {title: 'Templating with Jade', content: 'First template using Jade'});
});

var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});
