'use strict';
let express = require( 'express' );
let router = express.Router();
let session = require('express-session');
const constants = require('../../constants');
/**
 * pssport google
 * http://passportjs.org/docs/google
 */
let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: '596192477016-8td4sh74uj44r5itatkvlrml3e45cefu.apps.googleusercontent.com',
  clientSecret: '9NW57hdsbRKYzZxoSz15nFOL',
  callbackURL: `${constants.host}/auth/google/callback`},
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

router.get('/',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/callback',
  passport.authenticate('google', { failureRedirect: '/#/login' }),
  (req, res) => {
    session.user = { id: req.user.id, name: req.user.displayName }
    if( session.from ) {
      res.redirect( session.from );
    } else {
      res.redirect('/');
    }  });

module.exports = { passport, router, session } ;
