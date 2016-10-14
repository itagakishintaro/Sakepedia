'use strict';
let express = require( 'express' );
let router = express.Router();
let session = require('express-session');
const constants = require('../../constants');
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
  callbackURL: `//${constants.hostname}/auth/twitter/callback` },
  ( token, tokenSecret, profile, done ) => {
    process.nextTick( () => {
      return done(null, profile);
    });
  }
));

router.get( '/', ( req, res, next ) => {
  session.from = req.query.from;
  next();
} );

router.get('/',  passport.authenticate('twitter'));
router.get( '/callback', passport.authenticate( 'twitter', {  failureRedirect: '/#/login' } ), (req, res) => {
  session.user = { id: req.user.id, name: req.user.displayName }
  if( session.from ) {
    res.redirect( session.from );
  } else {
    res.redirect('/');
  }
} );

module.exports = { passport, router, session } ;
