'use strict';
let express = require('express');
let router = express.Router();

let twitter = require('./auth/twitter');
let facebook = require('./auth/facebook');
let google = require('./auth/google');

/* GET home page. */
router.get('/', (req, res) => {
  let user = {}
  if ( twitter.session.user && twitter.session.user.id ) {
    user = twitter.session.user;
    twitter.session.user = {};
  }
  if ( facebook.session.user && facebook.session.user.id ) {
    user = facebook.session.user;
    facebook.session.user = {};
  }
  if ( google.session.user && google.session.user.id ) {
    user = google.session.user;
    google.session.user = {};
  }
  res.render('index', {
    title: 'Sakepedia',
    user,
  });
});

module.exports = router;
