var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy

module.exports = function() {
  passport.use(new FacebookStrategy({
    clientID: '1634723173486340',
    clientSecret: '41c7d519a337803c37572c4f89c1833b',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    passReqToCallback: true
  },
  function (req, accessToken, refreshToken, profile, done) {
    var user = {};
      
      user.email = profile.emails[0].value;
      //user.image = profile._json.image.url;
      user.displayName = profile.displayName;
      
      user.facebook = {};
      user.facebook.id = profile.id;
      user.facebook.token = accessToken;
      
      done(null, user);
  }));
}