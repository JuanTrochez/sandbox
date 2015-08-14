var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/authentication', function(req, res) {
	console.log('authentication');
	res.render('user/login');
});

router.post('/login', function(req, res) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database : 'messagerie'
	});

	var query = 'SELECT * FROM user WHERE firstname = "' + req.body.username + '" AND password = "' + req.body.password + '"';
	connection.query(query, function(err, rows, field) {
		//console.log('rows', rows);
		if (rows) {
			req.session.user = rows;
			console.log('cookie ', req.session.user[0].id);
			res.redirect('/users');
		}
	});
});

module.exports = router;
