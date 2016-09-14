'use strict';
let express = require('express');
let router = express.Router();

let twitter = require('./auth/twitter');

/* GET home page. */
router.get('/', (req, res) => {
  let user = {}
  if ( twitter.session.user ) {
    user = twitter.session.user
  }
  res.render('index', {
    title: 'Sakepedia',
    user,
  });
});

module.exports = router;
