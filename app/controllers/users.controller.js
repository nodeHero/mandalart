var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/users', router);
};

router.get('/:id', function (req, res, next) {
  User.findOne({_id: req.params.id}, function (err, user) {
    console.log("Fetching details for user with id: " + req.params.id);
    if (err) return next(err);
    res.render('user', {
      title: 'User Profile',
      username: user.username
    });
  });
});

//Add a new user
router.post("/_new", function(req, res){
  console.log("Adding new User: " + req.body.id);
  console.log("Adding new User: " + req.body.password);
  console.log("Adding new User: " + req.body.username);
  var user = new User({
    _id: req.body.id,
    password: req.body.password,
    username: req.body.username
  });

  //Saving the model instance to the DB
  user.save(function(err, result){
    if ( err ) throw err;
    //After successfully saving the book we generate a JSON response with the
    //message and the inserted book information.
    res.json({
      messaage:"Successfully added user",
      user:result
    });
  });
});
