var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log("Fetching details for user with id: " + req.params.id);
  //The parameter in the route is accessed via request.params object.
  User.findOne({_id: req.params.id}, function(err, result){
    if ( err ) throw err;
    res.json(result);
  });
});

module.exports = router;
