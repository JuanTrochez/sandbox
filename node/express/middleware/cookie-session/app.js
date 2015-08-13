var express = require('express');
var app = express();
var cookieSession = require('cookie-session');


var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});


var n = 0;

app.use(cookieSession({
	name: 'session',
	secret: ['hello']
}));

app.use(function (req, res, next) {
	n++;
	req.session.call = n;
	console.log(req.session);
	next();
});

app.get('/', function(req, res) {
	res.send('hello');
});

