var express = require('express');
var app = express();

var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});


//routes methods
app.get('/method', function(req, res) {
	res.send('Hello! You are at the methods page');
	res.send('Get request');
});

app.post('/method', function(req, res) {
	res.send('Hello! You are at the methods page');
	res.send('Post request');
});

app.put('/method', function(req, res) {
	res.send('Hello! You are at the methods page');
	res.send('Put request');
});

app.delete('/method', function(req, res) {
	res.send('Hello! You are at the methods page');
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
app.get(/a/, function(req, res) {
  res.send('/a/');
});
