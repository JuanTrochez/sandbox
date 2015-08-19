var express = require('express');
var app = express();

// Including mongoDB
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log('Mongo error:', err);
	}
  console.log("Connected correctly to server.");
  db.close();
});

app.get('/', function (req, res) {
	res.send('Test mongodb');
});

var server = app.listen(8080, function () {
	var host = 'localhost';
	var port = server.address().port;

	console.log('Server running at http://%s:%s', host, port);
});
