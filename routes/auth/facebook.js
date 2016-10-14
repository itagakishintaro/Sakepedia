'use strict';
let express = require( 'express' );
let router = express.Router();
let session = require('express-session');
const constants = require('../../constants');
/**
 * pssport facebook
 * http://passportjs.org/docs/facebook
 */
let passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: '164983513944480',
  clientSecret: 'e1639b96c2ab304c9851bf295c20ec97',
  callbackURL: `//${constants.hostname}/auth/facebook/callback` },
  ( token, tokenSecret, profile, done ) => {
    process.nextTick( () => {
      return done(null, profile);
    });
  }
));

router.get( '/', ( req, res, next ) => {
  if( req.query.from == '/' ){
    session.from = '/#/';
  } else {
    session.from = req.query.from;
  }
  next();
} );
router.get('/', passport.authenticate('facebook'));
router.get( '/callback', passport.authenticate( 'facebook', {  failureRedirect: '/#/login' } ), (req, res) => {
  session.user = { id: req.user.id, name: req.user.displayName }
  if( session.from ) {
    res.redirect( session.from );
  } else {
    res.redirect('/#/'); // なぜか'/'だとうまくいかない
  }
} );

module.exports = { passport, router, session } ;
