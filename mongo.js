'use strict';
const constants = require('./constants');
/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.1/
 */
let db;
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');

// Connection URL
const URL = constants.mongourl;

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
