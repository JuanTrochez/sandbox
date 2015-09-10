var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();


app.use(cookieParser());

app.use(function(req, res, next) {
	console.log('my cookies: ', req.cookies);
	next();
});

app.get('/', function(req, res) {
	res.cookie('hello', 'world');
	res.send('hompage');
});

app.get('/clear', function(req, res) {
	res.clearCookie('hello');
	res.send('clear');
});

// ERROR LEVEL MIDDLEWARES
app.use(function(req, res, next) {
	res.send('not found: ' + req.url);
	res.status(404);

});

app.use(function(err, req, res, next) {
	console.log('error');
	console.error('stack:', err.stack);
	res.status(500).send('Something broke!');
});


var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});
