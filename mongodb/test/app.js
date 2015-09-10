// Including mongoDB
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log('Mongo error:', err);
		return;
	}
	console.log("Test connection successfull.");
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



// UPDATE SECTION
// update the first "Loic"
var updatePerson = function(db, callback) {
	var persons = db.collection('person').updateOne(
		{ "firstname": "Loic" },
		{
			$set: { "firstname": "Rick", "age": 33 },
			$currentDate: { "lastModified": true }
		}, function(err, result) {
			//console.log(result);
			callback(result);
	});

	console.log('Updating Loic');
};

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

// Replace document
var replaceDoc = function(db, callback) {
	var persons = db.collection('person').replaceOne(
		{ "firstname": "Jim" },
		{
			"firstname": "Coucou",
			"lastname": "Replaced",
			"height": 1.75

		}, function(err, result) {
			//console.log(result);
			callback(result);
	});

	console.log('Replacing document');
};


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


// DELETE SECTION
// delete one
var deleteOne = function(db, callback) {
	db.collection('person').deleteOne(
		{ "firstname": "Loic" },
		function(err, results) {
			//console.log(results);
			callback();
		}
	);
};

var deleteMany = function(db, callback) {
	db.collection('person').deleteMany(
		{ "age": { $lt: 20 } },
		function(err, results) {
			// console.log(results);
			callback();
		}
	);
};

var deleteAll = function(db, callback) {
	db.collection('person').deleteMany({},
		function(err, results) {
			// console.log(results);
			callback();
		}
	);
};



MongoClient.connect(url, function(err, db) {
	 // INSERT
	 insertPerson(db, function() {
	 	console.log('correctly inserted');
	 });

	// UPDATE
	updatePerson(db, function() {
		console.log('update one');
		console.log('------------ UPDATE ONE  --------------------');
	});

	updateMany(db, function() {
		console.log('update many');
		console.log('------------ UPDATE MANY  --------------------');
	});

	replaceDoc(db, function() {
		console.log('replaceDoc');
		console.log('------------ REPLACE DOC  --------------------');
	});


	// DELETE
	deleteOne(db, function() {
		console.log('------------ END DELETE ONE  --------------------');
	});

	deleteMany(db, function() {
		console.log('------------ END DELETE MANY  --------------------');
	});


	// FIND
	findPersons(db, function() {
		console.log('------------ END FIND ALL SECTION  --------------------');
	});

	findByName(db, function() {
		console.log('------------ END FIND BY NAME SECION -------------------');
	});

	findByAge(db, function() {
		console.log('------------ END FIND BY AGE SECTION --------------------');
	});

	findSorting(db, function() {
		console.log('------------- END FIND AND SORT SECTION -------------------');
	});

});


