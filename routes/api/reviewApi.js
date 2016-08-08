'use strict';
/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.1/
 */
let express = require( 'express' );
let router = express.Router();
let ObjectID = require( 'mongodb' ).ObjectID;
// MongoDB用ファイルを指定
let collection = require( '../../mongo' );
const LIMIT = 100;

// For Cross Origin
router.all( '/*', ( req, res, next ) => {
  res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

// GET find
router.get( '/find', ( req, res ) => {
  let query = {}
  if ( req.query.sakeId ) {
    query['sakeId'] = new RegExp( req.query.sakeId );
  }
  collection( 'review' ).find( query ).limit( LIMIT ).toArray( ( err, docs ) => {
    res.send( docs );
  } );
} );

// GET find :id
router.get( '/:id', ( req, res ) => {
  collection( 'review' ).findOne( {
    _id: new ObjectID( req.params.id )
  }, {}, function ( err, r ) {
    res.send( r );
  } );
} );

// POST insert data
router.post( '/', ( req, res ) => {
  collection( 'review' ).insertOne( req.body ).then( function ( r ) {
    res.send( r );
  } );
} );

// PUT update data
router.put( '/:id', ( req, res ) => {
  collection( 'review' ).findOneAndUpdate( {
    _id: new ObjectID( req.params.id )
  }, req.body, {}, function ( err, r ) {
    res.send( r );
  } );
} );

module.exports = router;
