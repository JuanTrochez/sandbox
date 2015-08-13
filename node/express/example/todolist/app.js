var express = require('express');
var app = express();
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser')


var server = app.listen(8080, function() {
	var host = 'localhost';
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieSession({
	name: 'session',
	secret: 'todoList'
}));

app.use(function(req, res, next) {
	req.session.todoList = req.session.todoList || [];
	console.log(req.session.todoList);
	next();
});

app.get('/todo', function(req, res) {
	res.render('index', {todoList: req.session.todoList});
});

app.post('/todo/add', function(req, res) {
	console.log('adding ' + req.body.todo + ' to the list');
	if (req.body.todo) {
		req.session.todoList.push(req.body.todo);
	} else {
		console.log('Cannot add "' + req.body.todo + '" to the list');
	}

	res.redirect('/todo');
});

app.get('/todo/delete/:id', function(req, res) {
	console.log('deleting todo ', req.params.id);
	var position = req.session.todoList.indexOf(req.params.id);
	req.session.todoList.splice(position, 1);
	res.redirect('/todo');
});

