var express = require('express');
var app = express();

// Including mongoDB
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test2';

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log('Mongo error:', err);
		return;
	}
  console.log("Connected correctly to server.");
  db.close();
});

//INSERT SECTION
// insert persons to the database
var insertPerson = function(db, callback) {
	db.collection('person').insertMany([
		{
			"firstname": "Richard",
			"lastname": "Bouc",
			"age": 43
		},
		{
			"firstname": "Loic",
			"lastname": "Richon",
			"age": 27
		},
		{
			"firstname": "Julie",
			"lastname": "Richon",
			"age": 75
		},
		{
			"firstname": "Loic",
			"lastname": "Lome",
			"age": 3
		},
		{
			"firstname": "Romain",
			"lastname": "Drac",
			"age": 18
		},
		{
			"firstname": "Ben",
			"lastname": "Taim",
			"age": 63
		},
		{
			"firstname": "Jim",
			"lastname": "Colobe",
			"age": 10
		}

	], function(err, result) {
		if (err) {
			console.log('error:', err);
			return
		}
		console.log('2 persons inserted to the collection "person"');
		callback(result);
	});
};

// comment to avoid duplications
// MongoClient.connect(url, function(err, db) {
// 	insertPerson(db, function() {
// 		db.close();
// 	});
// });


// UPDATE SECTION
// update the first "Loic"
var updatePerson = function(db, callback) {
	var persons = db.collection('person').updateOne(
		{ "firstname": "Loic" },
		{
			$set: { "firstname": "Rick", "age": 33 },
			$currentDate: { "lastModified": true }
		}, function(err, results) {
			//console.log(results);
			callback();
	});

	console.log('Updating Loic');
};

// MongoClient.connect(url, function(err, db) {
// 	updatePerson(db, function() {
// 		db.close();
// 	});
// });

// Update many
var updateMany = function(db, callback) {
	var persons = db.collection('person').updateMany(
		{ "lastname": "Richon" },
		{
			$set: { "lastname": "Tarin" },
			$currentDate: { "lastModified": true }
		}, function(err, results) {
			//console.log(results);
			callback();
	});

	console.log('Updating all lastnamed Richon to Tarin');
};

// MongoClient.connect(url, function(err, db) {
// 	updateMany(db, function() {
// 		db.close();
// 	});
// });

// Replace document
var replaceDoc = function(db, callback) {
	var persons = db.collection('person').replaceOne(
		{ "firstname": "Jim" },
		{
			"firstname": "Coucou",
			"lastname": "Replaced",
			"height": 1.75

		}, function(err, results) {
			//console.log(results);
			callback();
	});

	console.log('Replacing document');
};

MongoClient.connect(url, function(err, db) {
	replaceDoc(db, function() {
		db.close();
	});
});



//FIND SECTION
// find all
var findPersons = function(db, callback) {
	var persons = db.collection('person').find();
	persons.each(function(err, doc) {
		if (err) {
			console.log('find error:', err);
			return;
		}

		if (doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};

// find by name
var findByName = function(db, callback) {
	var persons = db.collection('person').find({"firstname": "Loic"});
	console.log('Find by firstname = "Loic"');
	persons.each(function(err, doc) {
		if (err) {
			console.log('find error:', err);
			return;
		}

		if (doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};

// find with conditions
var findByAge = function(db, callback) {
	var persons = db.collection('person').find({
		"age": { $gt: 23, $lt: 50 }
	});
	console.log('Find by age > 23 && < 50');
	persons.each(function(err, doc) {
		if (err) {
			console.log('find error:', err);
			return;
		}

		if (doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};

// find with conditions
var findSorting = function(db, callback) {
	var persons = db.collection('person').find({
		"age": { $gt: 23 }
	}).sort({ "age": 1 });
	console.log('Find sorting by age ASC');
	persons.each(function(err, doc) {
		if (err) {
			console.log('find error:', err);
			return;
		}

		if (doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};

MongoClient.connect(url, function(err, db) {
	findPersons(db, function() {
		console.log('--------------------------------');
	});

	findByName(db, function() {
		console.log('--------------------------------');
	});

	findByAge(db, function() {
		console.log('--------------------------------');
	});

	findSorting(db, function() {
		console.log('--------------------------------');
	});
});


app.get('/', function (req, res) {
	res.send('Test mongodb, check the console');
});

var server = app.listen(8080, function () {
	var host = 'localhost';
	var port = server.address().port;

	console.log('Server running at http://%s:%s', host, port);
});
