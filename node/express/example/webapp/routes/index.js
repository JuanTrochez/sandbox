var express = require('express');
var router = express.Router();

// MongoDB
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/todo';

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log('error', err);
		return
	}
	console.log("Connected correctly to server.");
	db.close();
});


// var insertTodo = function(db, callback) {
// 	db.collection('todo').insertOne({
// 		"name": "first todo",
// 		"isActive": 1
// 	});
// };

// MongoClient.connect(url, function(err, db) {
// 	if (err) {
// 		console.log('error', err);
// 		return;
// 	}

// 	insertTodo(db, function() {
// 		console.log('inserting todo');
// 		db.close();
// 	});
// });


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Todo list with Angular, Express and MongoDB' });
});


// Retrieve data from db
router.get('/todo/get', function(req, res, next) {
	var result = 

	MongoClient.connect(url, function(err, db) {
		if (err) {
			console.log('error', err);
			return;
		}

		db.collection('todo').find().toArray(function(err, docs) {
			res.json(docs);
		});
	});

});

module.exports = router;
