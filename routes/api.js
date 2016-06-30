var express = require( 'express' );
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
// MongoDB用ファイルを指定
var collection = require( '../mongo' );
var COL = 'sake';

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
    res.contentType( 'json' );
    res.header( 'Access-Control-Allow-Origin', '*' );
    next();
} );

// GET find
router.get( '/', function ( req, res ) {
  collection(COL).find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// GET find :id
router.get( '/:id', function ( req, res ) {
  collection(COL).findOne( { _id: new ObjectID( req.params.id ) }, {}, function(err, r){
    res.send( r );
  } );
} );


// POST insert data
router.post( '/', function ( req, res ) {
  collection(COL).insertOne( req.body ).then(function(r) {
    res.send( r );
  });
} );

// PUT update data
router.put( '/:id', function ( req, res ) {
  collection(COL).findOneAndUpdate( { _id: new ObjectID( req.params.id ) }, req.body, {}, function(err, r){
    res.send( r );
  } );
} );

// DELETE remove data
router.delete( '/:id', function ( req, res ) {
  collection(COL).findOneAndDelete( { _id: new ObjectID( req.params.id ) }, {}, function(err, r){
    res.send( r );
  } );
} );

module.exports = router;
