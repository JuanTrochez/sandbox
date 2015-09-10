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

/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * FROM user WHERE id != ' + req.session.user[0].id, function(err, rows, field) {
		//console.log('rows', rows);
		setTimeout(function() {
			res.render('user/index', {users: rows});
		}, 5000);

	});
});

module.exports = router;
