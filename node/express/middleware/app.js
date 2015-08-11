var express = require('express');
var app = express();

var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});


// APPLICATION LEVEL MIDDLEWARES
//using middlewares before sending response
app.use(function(req, res, next) {
	console.log('This will be logged on every request');
	next();
});

app.use('/middleware', function(req, res, next) {
	console.log('Executed on every request on /middleware. Method: ', req.method);
	res.send('To see the method sended, check the console!');
});

app.get('/', function(req, res) {
	res.send('Middleware homepage, check the console! Go to <a href="/middleware">middleware</a>');
});


//choosing middlewares
app.get('/rooms/', function(req, res) {
	res.send('Enter "bed" on url');
});
app.use('/rooms/:room', function(req, res, next) {
	console.log('Defining route for: ', req.params.room);
	next();
});

app.get('/rooms/:room', function(req, res, next) {
	if (req.params.room == 'bed') {
		next('route');
	} else {
		next();
	}

}, function(req, res) {
	res.send('You are not in the bedroom');
});

app.get('/rooms/:room', function(req, res) {
	res.send('You are in the bedroom');
});


// ERROR LEVEL MIDDLEWARES
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


//BUILT IN MIDDLEWARE
var options = {
	dotfiles: 'ignore',
	etag: false,
	index: false,
	extensions: ['html'],
	redirect: false
}

app.use('/static', express.static('public', options));


