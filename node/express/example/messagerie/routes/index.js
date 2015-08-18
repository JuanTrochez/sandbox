var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/login');
});

router.post('/login', function(req, res) {
	console.log(req.body);
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database : 'messagerie'
	});

	var query = 'SELECT * FROM user WHERE firstname = "' + req.body.username + '" AND password = "' + req.body.password + '"';
	connection.query(query, function(err, rows, field) {
		console.log('rows', rows);
		if (rows.length >= 1) {
			req.session.user = rows;
			console.log('cookie ', req.session.user[0].id);
			res.redirect('/users');
		} else {
			res.redirect('/');
		}
	});
});

router.get('/logout', function(req, res) {
	console.log('logout');

	req.session.user = null;
	console.log('cookie ', req.session.user);

	res.redirect('/');

});

module.exports = router;
