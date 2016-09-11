var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(){
    passport.use(new GoogleStrategy({
    clientID: '560207838511-rjs5i4s1scq5dos4efdqdvhs7cb8i32g.apps.googleusercontent.com',
    clientSecret: 'ZBLQ_uTVKIv2VGCwUHoNCYEB',
    callbackURL: 'http://localhost:3000/auth/google/callback'},
    function(req, accessToken, refreshToken, profile, done) {
      var user = {};
      
      user.email = profile.emails[0].value;
      user.image = profile._json.image.url;
      user.displayName = profile.displayName;
      
      user.google = {};
      user.google.id = profile.id;
      user.google.token = accessToken;
      
      done(null, user);
    }
  ));
};
