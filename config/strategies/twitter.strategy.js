var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function(){
  passport.use(new TwitterStrategy({
    consumerKey: '',
    consumerSecret: '',
    callbackURL: '',
    passReqToCallback: true
  },
  function(req, token, tokenSecret, profile, done){
    var user = {};
      
      //user.email = profile.emails[0].value;
      user.image = profile._json.image.url;
      user.displayName = profile.displayName;
      
      user.twitter = {};
      user.twitter.id = profile.id;
      user.twitter.token = accessToken;
      user.twitter.tokenSecret = tokenSecret;
      
      done(null, user);
  }));
};