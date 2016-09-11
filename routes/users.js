var express = require('express');
var router = express.Router();
var keys = require('../deve');
var facebook = require('../services/facebook')
(keys.clientID, keys.clientSecret);


router.use('/', function(req, res, next) {
  
  if(!req.user) {
    res.redirect('/');
  }
  next();
  
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.user.facebook) {
    facebook.getImage(req.user.facebook.token,
      function(results){
        req.user.facebook.image = results.url;
        facebook.getFriends(
          req.user.facebook.token, function(results) {
            req.user.facebook.friends = results.total_count;
            res.render('users', {user: req.user});
          }
        );
    });
  } else {
    res.render('users', { user: req.user });
  } 
});

module.exports = router;
