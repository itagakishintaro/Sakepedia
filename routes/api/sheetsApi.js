'use strict';
let express = require( 'express' );
let router = express.Router();
// lib
let axios = require('axios');
// for sheets api v4
// https://developers.google.com/sheets/quickstart/nodejs
// Sakepedia.Japan / Sakepedia
// https://docs.google.com/spreadsheets/d/1VaVZhfL3qv4yLWvG1z-YX9YO2oRN36Rkady4Q1MYgL0/edit#gid=0
let fs = require('fs');
let readline = require('readline');
let google = require('googleapis');
let googleAuth = require('google-auth-library');

// For Cross Origin
router.all( '/*', ( req, res, next ) => {
  // res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

// GET
router.get( '/', ( req, res ) => {
  // If modifying these scopes, delete your previously saved credentials
  // at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
  let SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  let TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
      process.env.USERPROFILE) + '/.credentials/';
  let TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';

  // Load client secrets from a local file.
  fs.readFile('client_secret.json', function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Google Sheets API.
    authorize(JSON.parse(content), returnGlossary);
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   *
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  function authorize(credentials, callback) {
    let clientSecret = credentials.installed.client_secret;
    let clientId = credentials.installed.client_id;
    let redirectUrl = credentials.installed.redirect_uris[0];
    let auth = new googleAuth();
    let oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    oauth2Client.setCredentials(credentials.token);
    callback( oauth2Client );
  }

  function returnGlossary(auth) {
    let sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: '1VaVZhfL3qv4yLWvG1z-YX9YO2oRN36Rkady4Q1MYgL0',
      range: 'public',
    }, function(err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      let rows = response.values;
      if (rows.length == 0) {
        console.log('No data found.');
      } else {
        res.send( rows );
      }
    });
  }
} );

module.exports = router;
