var express = require('express');
var app = express();

var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});


//routes methods
app.get('/method', function(req, res) {
	res.send('Get request');
});

app.post('/method', function(req, res) {
	res.send('Post request');
});

app.put('/method', function(req, res) {
	res.send('Put request');
});

app.delete('/method', function(req, res) {
	res.send('Delete request');
});


//routes with strings
app.get('/', function(req, res) {
	res.send('Homepage');
});

app.get('/contact', function(req, res) {
	res.send('Contact');
});
app.get('/forum', function(req, res) {
	res.send('forum');
});


//routes with patterns
//acd, abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
//abcd, abbcd, abbbcd
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});
//abeverythingcd, abrootcd, absomehingcd
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});
//abef, abcdef
app.get('/ab(cd)?ef', function(req, res) {
  res.send('ab(cd)?ef');
});

//regular expression, everything with an 'a'
app.get(/xvf/, function(req, res) {
  res.send('/xvf/');
});


//routes callbacks functions
//single callback
app.get('/callbacks', function(req, res) {
	res.send('Single callback');
});

//two callbacks
app.get('/callbacks/2', function(req, res, next) {
	console.log('Logging from first callback');
	next();
}, function(req, res) {
	res.send('Result from second callback, check the console for the first callback');
});

//array of callbacks
var one = function(req, res, next) {
	console.log('First');
	next();
}

var two = function(req, res, next) {
	console.log('Second');
	next();
}

var three = function(req, res) {
	res.send('Result from third callback (array), check the console!');
}

app.get('/callbacks/array', [one, two, three]);

//callbacks + array
app.get('/callbacks/mix', [one, two], function(req, res, next) {
	console.log('Independent function one');
	next();
}, function(req, res) {
	res.send('Final result, Check the console!');
});


//chainable route
app.route('/method/2')
	.get(function(req, res) {
		res.send('Chain GET');
	})
	.post(function(req, res) {
		res.send('Chain POST');
	})
	.put(function(req, res) {
		res.send('Chain PUT');
	});
