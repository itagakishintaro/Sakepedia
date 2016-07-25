'use strict';
/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.1/
 */
let db;
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');

// Connection URL
// const URL = 'mongodb://localhost:27017/Sakepedia';
const URL = 'mongodb://heroku_zvpkmx6c:of08mhf44rloda0bcni3h8tjq6@ds011495.mlab.com:11495/heroku_zvpkmx6c'

// Use connect method to connect to the Server
MongoClient.connect(URL, (err, mongodb) => {
  assert.equal(null, err);
  console.log('Connected correctly to server');
  db = mongodb;
});

let collection = ( name ) => {
  return db.collection( name );
};

module.exports = collection;
