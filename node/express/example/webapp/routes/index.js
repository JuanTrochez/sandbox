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


var insertTodo = function(db, callback) {
	db.collection('todo').insertOne({
		"name": "first todo"
	});
};

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log('error', err);
		return;
	}

	insertTodo(db, function() {
		console.log('inserting todo');
		db.close();
	});
});


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Todo list with Angular, Express and MongoDB' });
});


// Retrieve data from db
router.get('/todo/get', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
		if (err) {
			console.log('error', err);
			return;
		}

		db.collection('todo').find().toArray(function(err, docs) {
			//console.log(docs);
			res.json(docs);
		});
	});

});

// Retrieve data from db
router.post('/todo/post', function(req, res, next) {

	console.log('req.body', req.body);

	MongoClient.connect(url, function(err, db) {
		if (err) {
			console.log('error', err);
			return;
		}

		db.collection('todo').insert({name: req.body.todo});

	});

	res.send('todo added!');
});

// Update data from db
router.post('/todo/edit', function(req, res, next) {

	console.log('req.body', req.body);

	MongoClient.connect(url, function(err, db) {
		if (err) {
			console.log('error', err);
			return;
		}

		db.collection('todo').updateOne(
			{_id: ObjectId(req.body.id)},
			{
				$set: {"name": req.body.name}
			}, function(err, results) {
				console.log('results', results);
			});

	});

	res.send('todo edited!');
});

router.post('/todo/delete', function(req, res, next) {

	console.log('req.body.todo', req.body.todo);

	MongoClient.connect(url, function(err, db) {
		if (err) {
			console.log('error', err);
			return;
		}

		db.collection('todo').deleteOne(
			{_id: ObjectId(req.body.todo)},
			function(err, results) {
				//console.log('results', results);
			}
		);

	});

	res.send('todo deleted!');
});

module.exports = router;
