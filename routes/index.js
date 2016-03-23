var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mandalart' });
});

// Mandalart About page.
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Mandalart About' });
});

module.exports = router;
