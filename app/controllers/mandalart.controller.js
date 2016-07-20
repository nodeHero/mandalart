var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Mandalart = mongoose.model('Mandalart');

module.exports = function (app) {
  app.use('/mandalarts/', router);
};

router.get('/:userid/:title', function (req, res, next) {
  Mandalart.findOne({title: req.params.title}, function (err, mandalart) {
    console.log("Fetching details for mandalart with title: " + req.params.title);
    if (err) return next(err);
    res.status(200).send(mandalart);
  });
});

