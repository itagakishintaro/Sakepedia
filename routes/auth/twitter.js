'use strict';
let express = require( 'express' );
let router = express.Router();

let session = require('express-session')
/**
 * pssport twitter
 * http://passportjs.org/docs/twitter
 */
let passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.serializeUser( (user, done) => {
  done(null, user);
});

passport.deserializeUser( (user, done) => {
  done(null, user);
});

passport.use(new TwitterStrategy({
  consumerKey: 'WOcQv6Oumgdt0ZSSImN2tM70u',
  consumerSecret: '59ELSChlyWqCtbqCH29IwZhz5x4QCSW8S1XsFZKxxll0hbZbQh',
  callbackURL: '/auth/twitter/callback' },
  ( token, tokenSecret, profile, done ) => {
    process.nextTick( () => {
      return done(null, profile);
    });
  }
));

router.get('/', passport.authenticate('twitter') );
router.get( '/callback', passport.authenticate( 'twitter', {  failureRedirect: '/#/login' } ), (req, res) => {
  session.user = { id: req.user.id, name: req.user.displayName }
  res.redirect('/');
} );

module.exports = { passport, router, session } ;
