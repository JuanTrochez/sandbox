var express = require('express');
var app = express();
var mysql = require('mysql');

var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database : 'test'
});

connection.connect();



app.get('/', function(req, res, next) {
	connection.query('SELECT * FROM person', function(err, rows, field) {
		console.log('rows', rows)
	});
	next();
}, function(req, res) {
	res.send('Query executed, check the console!');
});
