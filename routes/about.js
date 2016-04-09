var express = require('express');
var router = express.Router();

// Mandalart About page.
router.get('/', function(req, res, next) {
     res.render('about', {
     title: 'About'
     });
});

router.get('/mandalart', function(req, res, next) {
    res.render('about_mandalart', {
        title: 'Mandalart About'
    });
});

module.exports = router;
