'use strict';
let express = require( 'express' );
let router = express.Router();

/**
 * pssport twitter
 * http://passportjs.org/docs/twitter
 */

let passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new TwitterStrategy({
  consumerKey: 'WOcQv6Oumgdt0ZSSImN2tM70u',
  consumerSecret: '59ELSChlyWqCtbqCH29IwZhz5x4QCSW8S1XsFZKxxll0hbZbQh',
  callbackURL: '/auth/twitter/callback' },
  ( token, tokenSecret, profile, done ) => {
    console.log(token, tokenSecret, profile);
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
router.get('/', passport.authenticate('twitter') );

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get( '/callback', passport.authenticate( 'twitter', { successRedirect: '/', failureRedirect: '/#/login' } ) );

module.exports = { passport, router } ;
