var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('Custom homepage with an imported router, check the console for the timelog');
});

// define an other route
router.get('/method', function(req, res) {
  res.send('Get method in custom router');
})
.post('/method', function(req, res) {
  res.send('Post method in custom router');
});

module.exports = router;


