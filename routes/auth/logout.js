'use strict';
let express = require( 'express' );
let router = express.Router();

let session = require('express-session')

router.get('/', (req, res) => {
  session.user = null
  req.logout();
  res.redirect('/');
});

module.exports = router;
