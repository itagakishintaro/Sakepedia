'use strict';
let express = require( 'express' );
let router = express.Router();
// lib
let axios = require('axios');

// POST call google cloud vision api
router.post( '/', ( req, res ) => {
  const referer = 'https://sakepedia.herokuapp.com';
  const apiKey = `AIzaSyDND1v85x5DDK5R1UDaTJjLNUE6Ugl340I`;
  const url = `https://vision.googleapis.com/v1/images:annotate`;
  // Send API Request to Cloud Vision API
  let body = {
    requests: [
      { image: { content: req.body.content },
      features: [ { type: 'TEXT_DETECTION' } ] }
    ]
  };
  let headers = {
    headers: { 'Content-Type': 'application/json', referer }
  }
  axios.post( `${url}?key=${apiKey}` , body, headers )
  .then( ( r ) => {
    res.send( r.data );
  })
  .catch( error => {
    console.log( error );
  });
} );

module.exports = router;
