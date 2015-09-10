var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var async = require('async');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database : 'messagerie'
});

function isLogged(req, res, next) {
	console.log('cookie session user', req.session.user);
	if (req.session.user) {
		next();
	} else {
		res.redirect('/');
	}
}


// GET request on message post
router.get('/send/:id', isLogged, function(req, res) {
	async.parallel({
		user: function(callback) {
			var userQuery = 'SELECT * FROM user where id = ' + req.params.id;
			connection.query(userQuery, function(err, rows, field) {
				console.log('unique user', rows);
				callback(null, rows);
			});
		},
		listUser: function(callback) {
			var users = 'SELECT * FROM user';
			connection.query(users, function(err, rows, field) {
				console.log('list user send', rows);
				callback(null, rows);
			});
		},
		currentUser: function(callback) {
			var userQuery = 'SELECT * FROM user where id = ' + req.session.user[0].id;
			connection.query(userQuery, function(err, rows, field) {
				console.log('currentUser', rows);
				callback(null, rows);
			});
		}
	}, function(err, results) {
		res.render('message/send', {
			user: results.user,
			listUser: results.listUser,
			currentUser: results.currentUser,
			post: {},
			messages: {}
		});
	});
});


// POST request on message send
router.post('/send', isLogged, function(req, res) {
	async.parallel({
		user: function(callback) {
			var userQuery = 'SELECT * FROM user where id = ' + req.body.user;
			connection.query(userQuery, function(err, rows, field) {
				//console.log('unique user', rows);
				callback(null, rows);
			});
		},
		listUser: function(callback) {
			var users = 'SELECT * FROM user';
			connection.query(users, function(err, rows, field) {
				//console.log('list user send', rows);
				callback(null, rows);
			});
		},
		currentUser: function(callback) {
			var userQuery = 'SELECT * FROM user where id = ' + req.session.user[0].id;
			connection.query(userQuery, function(err, rows, field) {
				//console.log('currentUser', rows);
				callback(null, rows);
			});
		},
		dataPost: function(callback) {
			callback(null, req.body)
		}
	}, function(err, results) {
		var post = results.dataPost;

		var messageQuery = 'INSERT INTO message(object, content, sender, receiver) VALUES("' + post.object + '", "' + post.content + '", ' + req.session.user[0].id + ', ' + post.user + ')';
		connection.query(messageQuery, function(err, rows, field) {
			console.log('query insert');
			if (err) {
				console.log('error', err);
				req.flash('info', 'Error on posting');
			} else {
				req.flash('info', 'Message posted');
			}
		});

		console.log('post', post);


		res.render('message/send', {
			user: results.user,
			listUser: results.listUser,
			currentUser: results.currentUser,
			post: post,
			messages: 'hello'
		});
	});
});

router.get('/view', function(req, res) {
	async.parallel({
		send: function(callback) {
			var sendQuery = 'SELECT u.firstname "first", u.name "last", m.id "id", m.object "object" FROM message m LEFT JOIN user u ON m.receiver = u.id WHERE sender = ' + req.session.user[0].id;
			connection.query(sendQuery, function(err, rows, field) {
				//console.log('rows', rows);
				callback(null, rows);
			});
		},
		receive: function(callback) {
			var receiveQuery = 'SELECT u.firstname "first", u.name "last", m.id "id", m.object "object" FROM message m LEFT JOIN user u ON m.sender = u.id WHERE receiver = ' + req.session.user[0].id;
			connection.query(receiveQuery, function(err, rows, field) {
				callback(null, rows);
			});
		}
	}, function(err, results) {

		res.render('message/box', {
			send: results.send,
			receive: results.receive,
		});
	});
});

router.get('/view/:id', function(req, res) {

	var sendQuery = 'SELECT u.firstname "first", u.name "last", m.id "id", m.object "object", m.content "content" FROM message m LEFT JOIN user u ON m.receiver = u.id WHERE m.id = ' + req.params.id + ' AND (sender = ' + req.session.user[0].id + ' OR receiver = ' + req.session.user[0].id + ')';

	connection.query(sendQuery, function(err, rows, field) {
		//console.log('rows', rows);
		res.render('message/view', {
			message: rows
		});
	});
});

module.exports = router;
