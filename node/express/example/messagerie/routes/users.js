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

/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * FROM user', function(err, rows, field) {
		console.log('rows', rows);
		res.render('user/index', {users: rows});
	});
});

/* GET user authentication */
router.get('/login', function(req, res) {
	res.send('login');
});

/* try to autheticate user */
router.post('/login', function(req, res) {
	res.send('login page');
});

router.get('/message/:id', function(req, res) {
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
		}
	}, function(err, results) {
		res.render('message/send', {user: results.user, listUser: results.listUser});
	});
});

router.post('/message', function(req, res) {
	res.send('login page');
});

module.exports = router;
